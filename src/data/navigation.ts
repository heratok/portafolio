import { NavItem, SocialLink } from '../types';

export const navItems: NavItem[] = [
  { label: 'Inicio', href: '#home' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'Github',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: 'Linkedin',
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: 'Twitter',
  },
  {
    platform: 'Email',
    url: 'mailto:you@example.com',
    icon: 'Mail',
  },
];