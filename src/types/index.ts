export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  sourceLink?: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}