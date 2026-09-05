import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { resolve } from 'node:path';
import { test } from 'node:test';
import { build } from 'esbuild';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

// Exercise the real components and request code without opening a browser or sending messages.
const result = await build({
  stdin: {
    contents: `export { default as App } from './App'; export { initialLocale, normalizeLocale } from './i18n'; export { content } from './content'; export { submitContact } from './lib/contact';`,
    resolveDir: process.cwd(), loader: 'tsx',
  },
  bundle: true, write: false, platform: 'node', format: 'cjs', packages: 'external', logLevel: 'silent',
});
const loaded = { exports: {} };
new Function('require', 'module', 'exports', result.outputFiles[0].text)(createRequire(resolve('package.json')), loaded, loaded.exports);
const { App, initialLocale, normalizeLocale, content, submitContact } = loaded.exports;
const originalWindow = Object.getOwnPropertyDescriptor(globalThis, 'window');
const originalNavigator = Object.getOwnPropertyDescriptor(globalThis, 'navigator');
const originalFetch = globalThis.fetch;
function environment({ query = '', saved = null, languages = ['pt-BR'], blocked = false } = {}) {
  Object.defineProperty(globalThis, 'window', { configurable: true, value: {
    location: { href: `https://example.com/portifolio-web/${query}` },
    localStorage: { getItem() { if (blocked) throw new Error('Storage blocked'); return saved; } },
  } });
  Object.defineProperty(globalThis, 'navigator', { configurable: true, value: { languages } });
}
function restore() {
  for (const [key, descriptor] of [['window', originalWindow], ['navigator', originalNavigator]]) {
    if (descriptor) Object.defineProperty(globalThis, key, descriptor);
    else delete globalThis[key];
  }
  globalThis.fetch = originalFetch;
}
try {
  await test('Locale resolution respects URL, saved preference, browser languages and fallback', () => {
    assert.equal(normalizeLocale('pt-PT'), 'pt-BR');
    assert.equal(normalizeLocale('en-US'), 'en');
    assert.equal(normalizeLocale('es-MX'), 'es');
    assert.equal(normalizeLocale('fr'), null);
    environment({ query: '?lang=es', saved: 'en', languages: ['pt-BR'] });
    assert.equal(initialLocale(), 'es');
    environment({ saved: 'en', languages: ['es'] });
    assert.equal(initialLocale(), 'en');
    environment({ blocked: true, languages: ['fr', 'es-AR'] });
    assert.equal(initialLocale(), 'es');
    environment({ query: '?lang=invalid', saved: 'invalid', languages: ['de'] });
    assert.equal(initialLocale(), 'pt-BR');
  });
  for (const locale of ['pt-BR', 'en', 'es']) {
    await test(`Complete portfolio renders in ${locale} with working section targets and project links`, () => {
      environment({ query: `?lang=${locale}` });
      const markup = renderToStaticMarkup(React.createElement(App));
      const escaped = text => text.replaceAll('&', '&amp;').replaceAll("'", '&#x27;');
      assert.ok(markup.includes(escaped(content[locale].contact.submit)));
      assert.ok(markup.includes(escaped(content[locale].experience.role)));
      for (const project of content[locale].projects.items) assert.ok(markup.includes(escaped(project.title)));
      for (const id of ['main', 'hero', 'projects', 'about', 'experience', 'skills', 'contact']) assert.ok(markup.includes(`id="${id}"`));
      const ids = [...markup.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
      assert.equal(new Set(ids).size, ids.length, 'IDs must be unique');
      for (const [, target] of markup.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(target), `Missing target: ${target}`);
      for (const [, tag] of markup.matchAll(/(<a\b[^>]*target="_blank"[^>]*>)/g)) assert.ok(tag.includes('rel="noopener noreferrer"'));
      assert.equal((markup.match(/<h1>/g) ?? []).length, 1);
      assert.equal((markup.match(/aria-pressed="true"/g) ?? []).length, 1);
      assert.ok(!markup.includes('undefined'));
      assert.ok(!markup.includes('images.unsplash.com'));
      assert.ok(markup.includes('mailto:wcarlos_col@hotmail.com'));
    });
  }
  const message = { name: ' Visitor ', email: ' visitor@example.com ', message: ' A project idea ' };
  await test('Contact sends trimmed fields and waits for explicit service confirmation', async () => {
    for (const success of [true, 'true']) {
      globalThis.fetch = async (url, options) => {
        assert.equal(url, 'https://formsubmit.co/ajax/wcarlos_col@hotmail.com');
        assert.equal(options.method, 'POST');
        assert.deepEqual(JSON.parse(options.body), { name: 'Visitor', email: 'visitor@example.com', message: 'A project idea', _subject: 'Portfólio — Visitor', _template: 'table', _replyto: 'visitor@example.com', _captcha: 'false' });
        assert.ok(options.signal instanceof AbortSignal);
        return new Response(JSON.stringify({ success }), { status: 200 });
      };
      await submitContact(message, new AbortController().signal);
    }
  });
  await test('Contact rejects HTTP errors, denied deliveries, malformed replies and network failures', async () => {
    const responses = [
      () => new Response('{}', { status: 500 }),
      () => new Response('{"success":false}'),
      () => new Response('{"success":"false"}'),
      () => new Response('{}'),
      () => new Response('invalid json'),
      () => { throw new TypeError('Network unavailable'); },
      () => { throw new DOMException('Aborted', 'AbortError'); },
    ];
    for (const response of responses) {
      globalThis.fetch = async () => response();
      await assert.rejects(() => submitContact(message, new AbortController().signal));
    }
  });
} finally { restore(); }
