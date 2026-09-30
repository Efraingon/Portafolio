export type ProjectCategory = 
  | "All"
  | "Cloud Architecture"
  | "Full-Stack SaaS"
  | "AI & Automation"
  | "Enterprise Web";

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  clientName: string;
  category: ProjectCategory;
  description: string;
  image: string;
  tags: string[];
  metrics: ProjectMetric[];
  featured: boolean;
  architectureHighlights: string[];
  liveUrl?: string;
}
