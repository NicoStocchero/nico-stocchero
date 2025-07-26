export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormProps {
  className?: string;
  onSubmit?: (data: ContactFormData) => Promise<void> | void;
  submitButtonText?: string;
  successMessage?: string;
  emailPlaceholder?: string;
  namePlaceholder?: string;
  messagePlaceholder?: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
  general?: string;
}

export interface ContactFormState {
  data: ContactFormData;
  errors: ContactFormErrors;
  isSubmitting: boolean;
  isSubmitted: boolean;
}