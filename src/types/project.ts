export type ProjectCategory =
  | "All"
  | "Full-Stack SaaS"
  | "Data & BI"
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
  repoUrl?: string;
}
