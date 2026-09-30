import { create } from "zustand";
import { ProjectScopeType, ProjectTimeline, EstimatorState } from "@/types/estimator";

interface EstimatorStoreActions {
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  selectScope: (scope: ProjectScopeType) => void;
  toggleFeature: (featureId: string) => void;
  setTimeline: (timeline: ProjectTimeline) => void;
  updateContactInfo: (field: keyof EstimatorState["contactInfo"], value: string) => void;
  resetEstimator: () => void;
}

const initialEstimatorState: EstimatorState = {
  step: 1,
  selectedScope: "MVP Development",
  selectedFeatures: ["feat-auth-roles", "feat-dark-glass"],
  selectedTimeline: "Standard (1-2 months)",
  contactInfo: {
    fullName: "",
    email: "",
    company: "",
    notes: "",
  },
};

export const useEstimatorStore = create<EstimatorState & EstimatorStoreActions>((set) => ({
  ...initialEstimatorState,

  setStep: (step) => set({ step }),
  nextStep: () => set((state) => ({ step: Math.min(state.step + 1, 4) })),
  prevStep: () => set((state) => ({ step: Math.max(state.step - 1, 1) })),

  selectScope: (scope) => set({ selectedScope: scope }),

  toggleFeature: (featureId) =>
    set((state) => {
      const exists = state.selectedFeatures.includes(featureId);
      return {
        selectedFeatures: exists
          ? state.selectedFeatures.filter((id) => id !== featureId)
          : [...state.selectedFeatures, featureId],
      };
    }),

  setTimeline: (timeline) => set({ selectedTimeline: timeline }),

  updateContactInfo: (field, value) =>
    set((state) => ({
      contactInfo: {
        ...state.contactInfo,
        [field]: value,
      },
    })),

  resetEstimator: () => set({ ...initialEstimatorState }),
}));
