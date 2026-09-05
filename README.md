# Portfólio — Weslley Carlos de Morais

Portfólio pessoal em React, TypeScript e Vite. A identidade visual usa tipografia editorial, divisórias finas, fundo claro, verde e blocos escuros para apresentar projetos, experiência profissional, tecnologias e contato.

## Executar

Com Node.js 22.12+ e npm:

```bash
npm ci
npm run dev
```

O endereço local é exibido pelo Vite. O projeto mantém a base `/portifolio-web/` para publicação no GitHub Pages.

```bash
npm test       # Traduções, renderização, navegação e envio de contato com serviço simulado
npm run build # TypeScript e compilação de produção
npm run preview
npm run deploy # Publicação no GitHub Pages
```

## Conteúdo e idiomas

- `content.ts`: textos de projetos, apresentação, experiência, tecnologias e contato em português, inglês e espanhol.
- `i18n.tsx`: textos do cabeçalho e abertura, contexto de idioma e metadados. A prioridade inicial é `?lang=pt-BR|en|es`, preferência salva, idiomas do navegador e, por fim, português.
- `constants.ts`: repositórios, contatos e tecnologias. Os textos dos quatro projetos em `content.ts` seguem a mesma ordem de `PROJECTS`.
- `index.css`: identidade visual, componentes e regras responsivas.
- `components/`: seções individuais.

A troca de idioma atualiza a URL sem recarregar, salva a preferência quando o navegador permite e atualiza o título, a descrição e o atributo `lang` do documento. Nomes de tecnologias e marcas são preservados. Os metadados iniciais do HTML estão em português; não há renderização de páginas separadas no servidor para cada idioma.

## Contato

O formulário usa a integração existente com FormSubmit e envia para o e-mail definido em `constants.ts`. Há validação nativa, proteção contra envios duplicados, campo de prevenção de spam, limite de 15 segundos e estados de envio, sucesso e erro traduzidos. O sucesso exige confirmação explícita do serviço. O e-mail direto está disponível como alternativa.

A entrega real depende da ativação do endereço no FormSubmit e da disponibilidade do serviço. Os testes simulam as respostas e não enviam mensagens reais.

## Acessibilidade

Navegação por âncoras, link para pular ao conteúdo, foco visível, rótulos de formulário, indicação do idioma ativo, menu móvel com fechamento por Escape e suporte à preferência de movimento reduzido. O conteúdo permanece visível sem depender de animações de entrada.
