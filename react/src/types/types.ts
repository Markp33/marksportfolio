export interface NavItem {
  to: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  desc: string;
  tech: string[]
  link: string;
  video: string;
}
