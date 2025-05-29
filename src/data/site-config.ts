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
    subtitle?: string;
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
    subtitle: 'Analista y Desarrollador de Software',
    
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
        text: 'Bienvenido a mi portafolio. Soy Analista y Desarrollador de Software con más de 4 años de experiencia en el diseño e implementación de soluciones tecnológicas. He trabajado en proyectos de interoperabilidad en salud, aplicaciones inmobiliarias, e-commerce, sistemas de gestión documental y soluciones empresariales para pymes. Me especializo en crear productos funcionales, eficientes y centrados en las necesidades del cliente.',
        image: {
            src: '/hero.jpeg',
            alt: 'Jorge Arboleda en su espacio de trabajo'
        },
    },

    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
