export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
  website: 'https://jarboleda333.github.io',
  title: '',
  subtitle: '',
  description: 'Tema para blog y portafolio basado en Astro.js y Tailwind CSS, creado por justgoodui.com',
  
  image: {
    src: '/site-image.jpg',
    alt: 'Vista previa del sitio'
  },

  headerNavLinks: [
    {
      text: 'Perfil',
      href: '/'
    },
    {
      text: 'Proyectos',
      href: '/projects'
    },
  ],

  hero: {
    title: '¡Hola! Soy Jorge Arboleda.',
    text: 'Bienvenido a mi portafolio...',
    image: {
      src: '/hero.jpeg',
      alt: 'Jorge Arboleda en su espacio de trabajo'
    }
  },

  postsPerPage: 8,
  projectsPerPage: 8
};

export default siteConfig;
