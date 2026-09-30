export type ProjectScopeType = "MVP Development" | "Enterprise SaaS" | "Cloud Migration" | "AI Integration Audit";
export type ProjectTimeline = "Express (2-4 weeks)" | "Standard (1-2 months)" | "Scale (3+ months)";

export interface ScopeOption {
  id: ProjectScopeType;
  title: string;
  description: string;
  basePriceUSD: number;
  iconName: string;
}

export interface FeatureOption {
  id: string;
  title: string;
  description: string;
  priceUSD: number;
  category: "Frontend" | "Backend/Cloud" | "AI/Automation" | "DevOps";
}

export interface EstimatorState {
  step: number;
  selectedScope: ProjectScopeType | null;
  selectedFeatures: string[];
  selectedTimeline: ProjectTimeline;
  contactInfo: {
    fullName: string;
    email: string;
    company: string;
    notes: string;
  };
}
