import type { Locale } from './i18n';
const pt = {
  projects: {
    kicker: '01 / Projetos selecionados', title: 'Ideias colocadas', emphasis: 'em prática.',
    intro: 'Projetos pessoais para resolver problemas, experimentar tecnologias e aprender construindo.', all: 'Todos no GitHub', source: 'Ver código', featured: 'Em destaque',
    items: [
      { title: 'Representação Comercial', category: 'Aplicação full-stack', description: 'Um sistema para organizar pedidos de representação comercial. Meu espaço para conectar interface, regras de negócio e banco de dados em uma aplicação completa.' },
      { title: 'Website CPI', category: 'Desenvolvimento web', description: 'Um site para um projeto de casais da igreja. O foco: uma experiência leve, conteúdo acessível e facilidade na atualização.' },
      { title: 'Controle de Presos', category: 'Organização de dados', description: 'Uma aplicação objetiva para organizar e acompanhar registros de presos, desenvolvida com Python e SQLite.' },
      { title: 'Diário Oficial — Web Scraper', category: 'Automação', description: 'Coleta automatizada de dados do Diário Oficial dos Municípios de Mato Grosso, usando Python para reduzir o trabalho manual.' },
    ],
  },
  about: {
    kicker: '02 / Sobre mim', title: 'A curiosidade é', emphasis: 'o ponto de partida.',
    intro: 'Sou Weslley Carlos de Morais, servidor público federal e desenvolvedor. Gosto de entender como as coisas funcionam — e de encontrar maneiras de fazê-las funcionar melhor.',
    paragraphs: [
      'Minha relação com a tecnologia nasceu de problemas do dia a dia: processos que podiam ser mais simples, informações que precisavam estar organizadas e tarefas que não precisavam ser manuais.',
      'No serviço público, levo essa visão para sistemas internos. Nos projetos pessoais, aprofundo meus conhecimentos em Python, TypeScript, React, Node.js e PostgreSQL, da modelagem dos dados à publicação da aplicação.',
    ],
    note: 'Entender o problema.\nConstruir com cuidado.\nContinuar aprendendo.', noteLabel: 'Meu jeito de trabalhar',
  },
  experience: {
    kicker: '03 / Experiência', title: 'Tecnologia a serviço', emphasis: 'do trabalho real.',
    role: 'Desenvolvedor Oracle APEX', organization: 'Serviço Público Federal',
    intro: 'Desenvolvimento e manutenção de sistemas internos, com foco em gestão de dados e eficiência operacional.',
    responsibilitiesTitle: 'O que faço',
    responsibilities: [
      'Desenvolvimento de aplicações e otimização de páginas com Oracle APEX.',
      'Modelagem de dados e otimização de consultas SQL.',
      'Regras de negócio, validações e rotinas automatizadas em PL/SQL.',
      'Integrações REST e customizações com JavaScript, HTML e CSS.',
    ],
    systemsTitle: 'Sistemas em que trabalhei',
    systems: ['Gestão estratégica com metodologia OKR', 'Acompanhamento de indicadores', 'Gestão de treinamentos operacionais', 'Automação, relatórios e monitoramento'],
    confidentiality: 'Sistemas internos. As descrições preservam a confidencialidade dos projetos.',
  },
  skills: {
    kicker: '04 / Tecnologias', title: 'Minha caixa', emphasis: 'de ferramentas.',
    intro: 'O que uso no trabalho e o que venho explorando nos projetos pessoais.',
    categories: ['Backend & dados', 'Frontend', 'Ferramentas'],
    notes: ['Base da minha atuação', 'Em constante aprendizado', 'Do desenvolvimento à entrega'],
  },
  contact: {
    kicker: '05 / Contato', title: 'Uma boa conversa', emphasis: 'é um começo.',
    intro: 'Tem um projeto em mente, uma oportunidade ou uma ideia para trocar? Escreva para mim.',
    emailLabel: 'E-mail direto', name: 'Seu nome', email: 'Seu e-mail', message: 'O que você tem em mente?',
    namePlaceholder: 'Como posso te chamar?', emailPlaceholder: 'voce@exemplo.com', messagePlaceholder: 'Conte um pouco sobre sua ideia…',
    submit: 'Enviar mensagem', submitting: 'Enviando…',
    successTitle: 'Mensagem enviada.', success: 'Obrigado pelo contato. Retornarei assim que possível.', again: 'Escrever outra mensagem',
    error: 'Não foi possível enviar. Tente novamente ou use o e-mail ao lado.',
    service: 'Envio via FormSubmit. Seus dados serão usados para responder ao contato.',
  },
  footer: { role: 'Desenvolvimento & dados', back: 'Voltar ao início', rights: 'Todos os direitos reservados.' },
};
export const content: Record<Locale, typeof pt> = {
  'pt-BR': pt,
  en: {
    projects: {
      kicker: '01 / Selected projects', title: 'Ideas put', emphasis: 'into practice.',
      intro: 'Personal projects to solve problems, explore technologies and learn by building.', all: 'All on GitHub', source: 'View code', featured: 'Featured',
      items: [
        { title: 'Sales Management', category: 'Full-stack application', description: 'A system for organizing sales orders. A place to connect the interface, business logic and database in a complete application.' },
        { title: 'CPI Website', category: 'Web development', description: 'A website for a church couples project. The focus: a lightweight experience, accessible content and easy updates.' },
        { title: 'Inmate Records', category: 'Data management', description: 'A focused application for organizing and tracking inmate records, built with Python and SQLite.' },
        { title: 'Official Gazette — Web Scraper', category: 'Automation', description: 'Automated data collection from the Official Gazette of Mato Grosso’s municipalities, using Python to reduce manual work.' },
      ],
    },
    about: {
      kicker: '02 / About me', title: 'It starts', emphasis: 'with curiosity.',
      intro: 'I’m Weslley Carlos de Morais, a federal public servant and developer. I like understanding how things work — and finding ways to make them work better.',
      paragraphs: [
        'My interest in technology grew out of everyday problems: processes that could be simpler, information that needed organizing and tasks that didn’t need to be manual.',
        'In the public sector, I bring that perspective to internal systems. In my personal projects, I deepen my knowledge of Python, TypeScript, React, Node.js and PostgreSQL, from data modeling to deployment.',
      ],
      note: 'Understand the problem.\nBuild with care.\nKeep learning.', noteLabel: 'How I approach my work',
    },
    experience: {
      kicker: '03 / Experience', title: 'Technology for', emphasis: 'everyday work.',
      role: 'Oracle APEX Developer', organization: 'Brazilian Federal Public Service',
      intro: 'Building and maintaining internal systems, with a focus on data management and operational efficiency.',
      responsibilitiesTitle: 'What I do',
      responsibilities: ['Application development and page optimization with Oracle APEX.', 'Data modeling and SQL query optimization.', 'Business logic, validation and automated routines in PL/SQL.', 'REST integrations and customizations with JavaScript, HTML and CSS.'],
      systemsTitle: 'Systems I’ve worked on',
      systems: ['Strategic management with OKRs', 'Performance indicator tracking', 'Operational training management', 'Automation, reporting and monitoring'],
      confidentiality: 'Internal systems. Descriptions respect project confidentiality.',
    },
    skills: {
      kicker: '04 / Technologies', title: 'Inside', emphasis: 'my toolkit.',
      intro: 'What I use at work and what I’ve been exploring in personal projects.',
      categories: ['Backend & data', 'Frontend', 'Tools'], notes: ['The core of my work', 'Always learning', 'From development to delivery'],
    },
    contact: {
      kicker: '05 / Contact', title: 'Good things start', emphasis: 'with a conversation.',
      intro: 'Have a project in mind, an opportunity or an idea to share? Drop me a line.',
      emailLabel: 'Direct email', name: 'Your name', email: 'Your email', message: 'What’s on your mind?',
      namePlaceholder: 'What should I call you?', emailPlaceholder: 'you@example.com', messagePlaceholder: 'Tell me a little about your idea…',
      submit: 'Send message', submitting: 'Sending…', successTitle: 'Message sent.', success: 'Thanks for reaching out. I’ll get back to you as soon as I can.', again: 'Write another message',
      error: 'Your message could not be sent. Please try again or use the email address provided.',
      service: 'Sent via FormSubmit. Your details will be used to reply to your message.',
    },
    footer: { role: 'Development & data', back: 'Back to top', rights: 'All rights reserved.' },
  },
  es: {
    projects: {
      kicker: '01 / Proyectos seleccionados', title: 'Ideas llevadas', emphasis: 'a la práctica.',
      intro: 'Proyectos personales para resolver problemas, explorar tecnologías y aprender construyendo.', all: 'Todos en GitHub', source: 'Ver código', featured: 'Destacado',
      items: [
        { title: 'Representación Comercial', category: 'Aplicación full-stack', description: 'Un sistema para organizar pedidos comerciales. Mi espacio para conectar interfaz, lógica de negocio y base de datos en una aplicación completa.' },
        { title: 'Sitio web CPI', category: 'Desarrollo web', description: 'Un sitio para un proyecto de parejas de la iglesia. El enfoque: una experiencia ligera, contenido accesible y facilidad de actualización.' },
        { title: 'Registro de Reclusos', category: 'Organización de datos', description: 'Una aplicación práctica para organizar y dar seguimiento a registros de reclusos, desarrollada con Python y SQLite.' },
        { title: 'Diario Oficial — Web Scraper', category: 'Automatización', description: 'Recopilación automatizada de datos del Diario Oficial de los Municipios de Mato Grosso, usando Python para reducir el trabajo manual.' },
      ],
    },
    about: {
      kicker: '02 / Sobre mí', title: 'La curiosidad es', emphasis: 'el punto de partida.',
      intro: 'Soy Weslley Carlos de Morais, servidor público federal y desarrollador. Me gusta entender cómo funcionan las cosas y encontrar maneras de mejorarlas.',
      paragraphs: [
        'Mi relación con la tecnología nació de problemas cotidianos: procesos que podían ser más sencillos, información que necesitaba orden y tareas que no tenían por qué ser manuales.',
        'En el sector público, llevo esa visión a los sistemas internos. En mis proyectos personales, profundizo en Python, TypeScript, React, Node.js y PostgreSQL, desde el modelado de datos hasta la publicación de la aplicación.',
      ],
      note: 'Entender el problema.\nConstruir con cuidado.\nSeguir aprendiendo.', noteLabel: 'Mi forma de trabajar',
    },
    experience: {
      kicker: '03 / Experiencia', title: 'Tecnología al servicio', emphasis: 'del trabajo real.',
      role: 'Desarrollador Oracle APEX', organization: 'Servicio Público Federal de Brasil',
      intro: 'Desarrollo y mantenimiento de sistemas internos, con enfoque en la gestión de datos y la eficiencia operativa.',
      responsibilitiesTitle: 'Lo que hago',
      responsibilities: ['Desarrollo de aplicaciones y optimización de páginas con Oracle APEX.', 'Modelado de datos y optimización de consultas SQL.', 'Lógica de negocio, validaciones y rutinas automatizadas en PL/SQL.', 'Integraciones REST y personalizaciones con JavaScript, HTML y CSS.'],
      systemsTitle: 'Sistemas en los que trabajé',
      systems: ['Gestión estratégica con metodología OKR', 'Seguimiento de indicadores', 'Gestión de formación operativa', 'Automatización, informes y monitoreo'],
      confidentiality: 'Sistemas internos. Las descripciones respetan la confidencialidad de los proyectos.',
    },
    skills: {
      kicker: '04 / Tecnologías', title: 'Mi caja', emphasis: 'de herramientas.',
      intro: 'Lo que uso en el trabajo y lo que exploro en mis proyectos personales.',
      categories: ['Backend y datos', 'Frontend', 'Herramientas'], notes: ['La base de mi trabajo', 'En constante aprendizaje', 'Del desarrollo a la entrega'],
    },
    contact: {
      kicker: '05 / Contacto', title: 'Una buena charla', emphasis: 'es un comienzo.',
      intro: '¿Tienes un proyecto, una oportunidad o una idea para compartir? Escríbeme.',
      emailLabel: 'Correo directo', name: 'Tu nombre', email: 'Tu correo', message: '¿Qué tienes en mente?',
      namePlaceholder: '¿Cómo te llamas?', emailPlaceholder: 'tu@ejemplo.com', messagePlaceholder: 'Cuéntame un poco sobre tu idea…',
      submit: 'Enviar mensaje', submitting: 'Enviando…', successTitle: 'Mensaje enviado.', success: 'Gracias por escribir. Te responderé en cuanto pueda.', again: 'Escribir otro mensaje',
      error: 'No se pudo enviar el mensaje. Inténtalo de nuevo o usa el correo indicado.',
      service: 'Envío mediante FormSubmit. Tus datos se utilizarán para responder al mensaje.',
    },
    footer: { role: 'Desarrollo y datos', back: 'Volver al inicio', rights: 'Todos los derechos reservados.' },
  },
};
