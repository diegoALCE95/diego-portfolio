// ---------------------------------------------------------------------------
// Central content + i18n for the portfolio.
// Everything localizable lives here so both the static (build-time) render and
// the client-side language switch read from a single source of truth.
// ---------------------------------------------------------------------------

/** UI strings dictionary. */
export const T = {
  en: {
    navAbout: 'About', navWork: 'Work', navSkills: 'Skills', navExp: 'Experience', navTalk: "Let's talk",
    heroBadge: 'available for freelance',
    heroPre: 'Frontend & WordPress developer building ', heroHi: 'fast, high-quality', heroPost: ' websites.',
    heroSub: "Since 2016 I've built e-commerce stores, landing pages and custom sites for companies around the globe — turning designs into pixel-perfect, production-ready builds across WordPress, Shopify and Webflow.",
    heroCtaWork: 'View my work', heroCtaCv: 'View CV',
    stat1: 'years building\nfor the web', stat2: 'projects shipped\n& live', stat3: 'continents\nof clients',
    aboutHeading: 'A developer who bridges design and engineering, delivering polished websites since 2016.',
    aboutP1: "For nearly a decade I've partnered with small and medium-sized businesses worldwide to design and build websites that perform — from e-commerce platforms and landing pages to portfolios, blogs and custom web applications.",
    aboutP2: 'I work at the intersection of design and development, translating UI/UX concepts into clean, standards-compliant, production-ready builds that load fast, stay accessible, and are easy for clients to manage.',
    workHeading: 'Projects', workCount: 'highlights',
    skillsHeading: 'Skills & stack', expHeading: 'Experience',
    contactEyebrow: "let's build something", contactHeading: 'Have a project in mind?',
    contactSub: "I'm currently open to freelance projects. Whether it's WordPress, Shopify or Webflow — let's make something fast and delightful.",
    contactCta: 'Message me on WhatsApp',
    footer: 'Designed & built with care ✦',
    skillTitles: ['Languages', 'Frameworks', 'Platforms', 'Craft & Data'],
    aboutEyebrow: 'about', workEyebrow: 'selected work', skillsEyebrow: 'toolkit', expEyebrow: 'journey',
    portraitLabel: '[ portrait / photo ]',
  },
  es: {
    navAbout: 'Perfil', navWork: 'Trabajo', navSkills: 'Habilidades', navExp: 'Experiencia', navTalk: 'Hablemos',
    heroBadge: 'disponible para proyectos',
    heroPre: 'Desarrollador frontend y WordPress que crea sitios web ', heroHi: 'rápidos y de gran calidad', heroPost: '.',
    heroSub: 'Desde 2016 he creado tiendas de e-commerce, landing pages y sitios a medida para empresas de todo el mundo — convirtiendo diseños en desarrollos precisos y listos para producción con WordPress, Shopify y Webflow.',
    heroCtaWork: 'Ver mi trabajo', heroCtaCv: 'Ver CV',
    stat1: 'años creando\npara la web', stat2: 'proyectos\npublicados', stat3: 'continentes\ncon clientes',
    aboutHeading: 'Un desarrollador que une diseño e ingeniería, entregando sitios web pulidos desde 2016.',
    aboutP1: 'Durante casi una década he colaborado con pequeñas y medianas empresas de todo el mundo para diseñar y construir sitios web que funcionan — desde plataformas de e-commerce y landing pages hasta portafolios, blogs y aplicaciones web a medida.',
    aboutP2: 'Trabajo en la intersección del diseño y el desarrollo, transformando conceptos de UI/UX en desarrollos limpios, según estándares y listos para producción: rápidos, accesibles y fáciles de gestionar para el cliente.',
    workHeading: 'Proyectos', workCount: 'proyectos',
    skillsHeading: 'Habilidades y stack', expHeading: 'Experiencia',
    contactEyebrow: 'construyamos algo', contactHeading: '¿Tienes un proyecto en mente?',
    contactSub: 'Actualmente estoy disponible para proyectos freelance. Ya sea WordPress, Shopify o Webflow — creemos algo rápido y con carácter.',
    contactCta: 'Escríbeme por WhatsApp',
    footer: 'Diseñado y construido con dedicación ✦',
    skillTitles: ['Lenguajes', 'Frameworks', 'Plataformas', 'Craft y Datos'],
    aboutEyebrow: 'about', workEyebrow: 'selected work', skillsEyebrow: 'toolkit', expEyebrow: 'journey',
    portraitLabel: '[ portrait / photo ]',
  },
};

/** Marquee skill names. */
export const skills = ['WordPress', 'Astro', 'Webflow', 'Shopify', 'JavaScript', 'HTML5', 'CSS3', 'PHP', 'Tailwind', 'Bootstrap', 'React', 'Next.js', 'Material UI'];

/** Skill grid items (paired positionally with T[lang].skillTitles). */
export const skillItems = [
  ['JavaScript', 'HTML5', 'CSS3', 'PHP'],
  ['React', 'Next.js', 'Astro', 'Bootstrap'],
  ['WordPress', 'Shopify', 'Webflow', 'WooCommerce'],
  ['Tailwind', 'GA4 / GTM', 'Klaviyo', 'Elementor / ACF'],
];

/** Experience timeline (newest first). */
export const rawExp = [
  { role: { en: 'Freelance Web Developer', es: 'Desarrollador Web Freelance' }, company: 'Webflow Atelier', period: '2025 — Now', desc: { en: 'Shopify, Webflow and WooCommerce builds paired with full analytics stacks — GTM, GA4, Looker Studio and Klaviyo — for clients across the USA & Ecuador, remotely.', es: 'Desarrollos en Shopify, Webflow y WooCommerce junto a stacks de analítica completos — GTM, GA4, Looker Studio y Klaviyo — para clientes de EE. UU. y Ecuador, en remoto.' } },
  { role: { en: 'Freelance Web Developer', es: 'Desarrollador Web Freelance' }, company: 'Work Ninjas', period: '2022 — 2024', desc: { en: 'WordPress development from scratch plus Webflow builds, using WooCommerce, Elementor and ACF for US & Honduras clients, remotely.', es: 'Desarrollo de WordPress desde cero además de proyectos en Webflow, usando WooCommerce, Elementor y ACF para clientes de EE. UU. y Honduras, en remoto.' } },
  { role: { en: 'WordPress Developer', es: 'Desarrollador WordPress' }, company: 'Mintec / Virtalio', period: '2020 — 2022', desc: { en: 'Web development with HTML, CSS, JS & Next.js and Shopify / Liquid, alongside custom WordPress builds with WooCommerce, Elementor and ACF.', es: 'Desarrollo web con HTML, CSS, JS y Next.js y Shopify / Liquid, junto a desarrollos de WordPress a medida con WooCommerce, Elementor y ACF.' } },
  { role: { en: 'Freelance Web Developer', es: 'Desarrollador Web Freelance' }, company: { en: 'Independent', es: 'Independiente' }, period: '2019 — 2020', desc: { en: 'End-to-end freelance work in Bucaramanga, Colombia: web & WordPress development, WPO & SEO, project management, sales and marketing.', es: 'Trabajo freelance integral en Bucaramanga, Colombia: desarrollo web y WordPress, WPO y SEO, gestión de proyectos, ventas y marketing.' } },
  { role: { en: 'WordPress Developer', es: 'Desarrollador WordPress' }, company: 'GenteClick', period: '2016 — 2019', desc: { en: 'Customer support, project management, WordPress development and SEO in Bucaramanga, Colombia.', es: 'Soporte al cliente, gestión de proyectos, desarrollo de WordPress y SEO en Bucaramanga, Colombia.' } },
];

// ---------------------------------------------------------------------------
// Projects.
// 01–08: original design projects (live URLs). 09–18: additional real client
// sites identified from the provided screenshots (URLs left as '#' for now).
// `img` = screenshot in /public; when absent a styled placeholder is shown.
// ---------------------------------------------------------------------------
export const rawProjects = [
  { num: '01', name: 'Muze Chocolate', tag: 'Shopify', img: '/muze-ss.png', shot: { en: 'store preview', es: 'vista de tienda' }, url: 'https://muzechocolate.com/', desc: { en: 'E-commerce development with Shopify for a premium chocolate brand.', es: 'Desarrollo de e-commerce con Shopify para una marca de chocolate premium.' }, tech: ['Shopify', 'Liquid', 'Javascript', 'CSS'] },
  { num: '02', name: 'Marie Birdie', tag: 'Shopify', img: '/mariebirdie-ss.png', shot: { en: 'store preview', es: 'vista de tienda' }, url: 'https://mariebirdie.com/', desc: { en: 'E-commerce development on an existing store with hundreds of sales. Analytics with Google Tag Manager, Google Analytics 4 and Klaviyo.', es: 'Desarrollo de e-commerce sobre una tienda existente con cientos de ventas. Analítica con Google Tag Manager, Google Analytics 4 y Klaviyo.' }, tech: ['Shopify', 'Liquid', 'Javascript', 'CSS'] },
  { num: '03', name: 'The Bottle Depot', tag: 'Shopify', img: '/bottle-ss.jpg', shot: { en: 'store preview', es: 'vista de tienda' }, url: 'https://thebottledepot.co/', desc: { en: 'E-commerce providing the most professional packaging solution. Built with Shopify.', es: 'E-commerce que ofrece la solución de empaque más profesional. Construido con Shopify.' }, tech: ['Shopify', 'Liquid', 'Javascript', 'CSS'] },
  { num: '04', name: 'Urbrands Clothing', tag: 'WooCommerce', img: '/urbrands-ss.png', shot: { en: 'store preview', es: 'vista de tienda' }, url: '#', desc: { en: 'WooCommerce & WordPress development with custom product imports, consuming an API.', es: 'Desarrollo con WooCommerce y WordPress con importación de productos personalizada, consumiendo una API.' }, tech: ['WordPress', 'WooCommerce', 'API'] },
  { num: '05', name: 'MUR Artesanas', tag: 'WooCommerce', img: '/murarte-ss.jpg', shot: { en: 'store preview', es: 'vista de tienda' }, url: '#', desc: { en: 'Bilingual e-commerce store for a Colombian artisan hammock brand, built with WooCommerce.', es: 'Tienda de e-commerce bilingüe para una marca colombiana de hamacas artesanales, construida con WooCommerce.' }, tech: ['WordPress', 'WooCommerce'] },
  { num: '06', name: 'Webflow Atelier', tag: 'Webflow', img: '/webflow-ss.png', shot: { en: 'site preview', es: 'vista del sitio' }, url: 'https://www.webflowatelier.com/', desc: { en: 'Static website development with Webflow.', es: 'Desarrollo de sitio web estático con Webflow.' }, tech: ['Webflow'] },
  { num: '07', name: 'Roof Squad', tag: 'Webflow', img: '/rsquad-ss.jpg', shot: { en: 'site preview', es: 'vista del sitio' }, url: 'https://www.roofsquad.com/', desc: { en: 'Roofing contractor with more than 20 years of combined experience serving Texas, Louisiana and Colorado. Built with Webflow.', es: 'Contratista de techado con más de 20 años de experiencia combinada que atiende Texas, Luisiana y Colorado. Construido con Webflow.' }, tech: ['Webflow'] },
  { num: '08', name: 'Hull Brothers', tag: 'WordPress', img: '/hb-ss.jpg', shot: { en: 'site preview', es: 'vista del sitio' }, url: 'https://hullbrothersroofing.com/', desc: { en: 'WordPress development for a roofing contractor serving Los Angeles & Culver City, with over 96 years in the roofing industry.', es: 'Desarrollo en WordPress para un contratista de techado que atiende Los Ángeles y Culver City, con más de 96 años en el sector.' }, tech: ['WordPress', 'Elementor'] },
  { num: '09', name: 'SupportLabs', tag: 'WordPress', img: '/spl-ss.jpg', shot: { en: 'site preview', es: 'vista del sitio' }, url: 'https://supportlabs.com/', desc: { en: 'WordPress development for an outsourcing company. Built with Elementor, PHP, JS, ACF and the Loom SDK for careers / job applications.', es: 'Desarrollo en WordPress para una empresa de outsourcing. Hecho con Elementor, PHP, JS, ACF y el SDK de Loom para vacantes y postulaciones.' }, tech: ['WordPress', 'ACF', 'Loom SDK'] },
  { num: '10', name: 'Work Ninjas', tag: 'WordPress', img: '/wn-ss.jpg', shot: { en: 'site preview', es: 'vista del sitio' }, url: 'https://workninjas.com/', desc: { en: 'A startup focused on automating back-office solutions for roofing contractors. Built with WordPress, Elementor, PHP, CSS, JS & Slick.js.', es: 'Una startup enfocada en automatizar soluciones de back-office para contratistas de techado. Hecho con WordPress, Elementor, PHP, CSS, JS y Slick.js.' }, tech: ['WordPress', 'Elementor', 'JS'] },
  { num: '11', name: 'Nice Roofs', tag: 'WordPress', img: '/niceroofs-ss.jpg', shot: { en: 'site preview', es: 'vista del sitio' }, url: 'https://niceroof.com/', desc: { en: 'WordPress development for a roofing contractor serving Pennsylvania. Built with Elementor.', es: 'Desarrollo en WordPress para un contratista de techado que atiende Pensilvania. Hecho con Elementor.' }, tech: ['WordPress', 'Elementor'] },
  { num: '12', name: 'Nail Your Marketing', tag: 'WordPress', img: '/nym-ss.jpg', shot: { en: 'site preview', es: 'vista del sitio' }, url: 'https://nailyourmarketing.com/', desc: { en: 'A startup focused on branding, social media, marketing and website development solutions. Built with WordPress & Elementor.', es: 'Una startup enfocada en branding, redes sociales, marketing y desarrollo web. Hecho con WordPress y Elementor.' }, tech: ['WordPress', 'Elementor'] },
  { num: '13', name: 'Monarch Roofing', tag: 'WordPress', img: '/monarch-ss.jpg', shot: { en: 'site preview', es: 'vista del sitio' }, url: 'https://monarchroofingllc.com/', desc: { en: 'Monarch specializes in metal, tile, shingles and low-slope roofs. Built with WordPress, HTML, CSS, PHP & JS.', es: 'Monarch se especializa en techos de metal, teja, shingles y de baja pendiente. Hecho con WordPress, HTML, CSS, PHP y JS.' }, tech: ['WordPress', 'PHP', 'JS'] },
  { num: '14', name: 'Marcor NY', tag: 'WordPress', img: '/marcor-ss.jpg', shot: { en: 'site preview', es: 'vista del sitio' }, url: 'https://marcorny.com/', desc: { en: 'Roofing and exterior home remodeling experts. Built with WordPress, HTML, CSS, PHP & JS.', es: 'Expertos en techado y remodelación exterior del hogar. Hecho con WordPress, HTML, CSS, PHP y JS.' }, tech: ['WordPress', 'PHP', 'JS'] },
  { num: '15', name: 'TX Vision Millworks', tag: 'WordPress', img: '/txv-ss.jpg', shot: { en: 'site preview', es: 'vista del sitio' }, url: 'https://www.txvisionmillworks.com/', desc: { en: 'Full-service millwork company specializing in custom woodwork and finish carpentry. Built with WordPress & Elementor.', es: 'Empresa de carpintería integral especializada en trabajos de madera a medida y carpintería de acabado. Hecho con WordPress y Elementor.' }, tech: ['WordPress', 'Elementor'] },
  { num: '16', name: 'Roofs for Solar', tag: 'WordPress', img: '/rfs-ss.jpg', shot: { en: 'site preview', es: 'vista del sitio' }, url: 'https://roofsforsolar.com/', desc: { en: 'Roofing and solar experts, featuring a private client portal. Built with WordPress & Elementor.', es: 'Expertos en techado y energía solar, con un portal privado para clientes. Hecho con WordPress y Elementor.' }, tech: ['WordPress', 'Elementor'] },
  { num: '17', name: 'Vaupes Eco Travel', tag: 'WordPress', img: '/vaupes-ss.png', shot: { en: 'site preview', es: 'vista del sitio' }, url: 'https://www.vaupesecotravel.com', desc: { en: 'WordPress development for a tourism center in Vaupés, Colombia.', es: 'Desarrollo en WordPress para un centro turístico en Vaupés, Colombia.' }, tech: ['WordPress'] },
  { num: '18', name: 'Vaupes Events', tag: 'WordPress', img: '/vaupes-ss2.png', shot: { en: 'site preview', es: 'vista del sitio' }, url: 'https://www.vaupesecotravel.com/eventos/', desc: { en: 'WordPress development of an events calendar, built with ACF, PHP, JavaScript and AJAX.', es: 'Desarrollo en WordPress de un calendario de eventos, hecho con ACF, PHP, JavaScript y AJAX.' }, tech: ['WordPress', 'ACF', 'AJAX'] },
  { num: '19', name: 'Infinilink Global', tag: 'WordPress', img: '/infin-ss.jpg', shot: { en: 'site preview', es: 'vista del sitio' }, url: '#', desc: { en: 'Real-estate website with property search and listings for a Houston, TX brokerage, built with WordPress.', es: 'Sitio inmobiliario con búsqueda y listados de propiedades para una agencia de Houston, TX, construido con WordPress.' }, tech: ['WordPress', 'PHP'] },
  { num: '20', name: "Dixie Grace's Boiled Peanuts", tag: 'Shopify', img: '/dixie-ss.png', shot: { en: 'store preview', es: 'vista de tienda' }, url: 'https://dixiegracesboiledpeanuts.com/', desc: { en: 'Ecommerce made with Shopify.', es: 'E-commerce desarrollado con Shopify.' }, tech: ['Shopify', 'Liquid', 'Javascript', 'CSS'] },
];

/** Projects per page for pagination. */
export const PER_PAGE = 8;
