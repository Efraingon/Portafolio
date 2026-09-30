"use client";

import { useQuery } from "@tanstack/react-query";
import { Project, ProjectCategory } from "@/types/project";
import { PROJECTS_DATA } from "@/lib/constants";

// Client-side fetcher function simulating TanStack Query server state fetching
async function fetchProjectsByCategory(category: ProjectCategory): Promise<Project[]> {
  // Simulate network request latency
  await new Promise((resolve) => setTimeout(resolve, 150));

  if (category === "All") {
    return PROJECTS_DATA;
  }
  return PROJECTS_DATA.filter((project) => project.category === category);
}

export function useProjectsQuery(category: ProjectCategory) {
  const { data: projects = [], isLoading, isError, refetch } = useQuery({
    queryKey: ["projects", category],
    queryFn: () => fetchProjectsByCategory(category),
  });

  return {
    projects,
    isLoading,
    isError,
    refetch,
  };
}
