export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  budgetRange: string;
  message: string;
}

export interface ContactSubmissionResult {
  success: boolean;
  message: string;
  submissionId?: string;
}
