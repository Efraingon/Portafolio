import { create } from "zustand";
import { ProjectCategory } from "@/types/project";

interface PortfolioStoreState {
  // Navigation & Category Filters
  activeCategory: ProjectCategory;
  setActiveCategory: (category: ProjectCategory) => void;

  // Estimator Modal Visibility
  isEstimatorOpen: boolean;
  openEstimator: () => void;
  closeEstimator: () => void;

  // Contact Modal/Drawer State
  isContactOpen: boolean;
  openContact: () => void;
  closeContact: () => void;

  // Theme state (Dark/Light)
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  setDarkMode: (isDark: boolean) => void;
}

export const usePortfolioStore = create<PortfolioStoreState>((set) => ({
  activeCategory: "All",
  setActiveCategory: (category) => set({ activeCategory: category }),

  isEstimatorOpen: false,
  openEstimator: () => set({ isEstimatorOpen: true }),
  closeEstimator: () => set({ isEstimatorOpen: false }),

  isContactOpen: false,
  openContact: () => set({ isContactOpen: true }),
  closeContact: () => set({ isContactOpen: false }),

  isDarkMode: true,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  setDarkMode: (isDark) => set({ isDarkMode: isDark }),
}));
