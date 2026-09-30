"use client";

import React, { useEffect } from "react";
import { usePortfolioStore } from "@/store/usePortfolioStore";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const isDarkMode = usePortfolioStore((state) => state.isDarkMode);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  return <>{children}</>;
}
