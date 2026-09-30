import { PROJECTS_DATA } from "@/lib/constants";
import { Project, ProjectCategory } from "@/types/project";

/**
 * Server-side service to retrieve project list with optional filtering and delay simulation.
 * Optimized for React Server Components (RSC).
 */
export async function getProjects(category: ProjectCategory = "All"): Promise<Project[]> {
  // Simulate server DB query latency (e.g. 50ms)
  await new Promise((resolve) => setTimeout(resolve, 50));

  if (category === "All") {
    return PROJECTS_DATA;
  }

  return PROJECTS_DATA.filter((project) => project.category === category);
}

export async function getFeaturedProjects(): Promise<Project[]> {
  await new Promise((resolve) => setTimeout(resolve, 30));
  return PROJECTS_DATA.filter((project) => project.featured);
}

export async function getProjectById(id: string): Promise<Project | null> {
  await new Promise((resolve) => setTimeout(resolve, 30));
  return PROJECTS_DATA.find((p) => p.id === id) || null;
}
