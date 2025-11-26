export interface NavItem {
  label: string;
  href: string;
}

export interface Step {
  id: string;
  number: string;
  title: string;
  description: string;
  image?: string;
}

export interface Advantage {
  title: string;
  description: string;
  icon: string;
}

export interface GeneratedContent {
  hook: string;
  dmResponse: string;
}