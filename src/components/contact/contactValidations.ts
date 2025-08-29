import type { ContactMessage } from '../../services/contactService';

export interface ValidationErrors {
    name?: string;
    email?: string;
    message?: string;
}

export const validateContactForm = (formData: ContactMessage): ValidationErrors => {
    const errors: ValidationErrors = {};
    
    if (!formData.name.trim()) {
        errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
        errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = 'Invalid email';
    }
    
    if (!formData.message.trim()) {
        errors.message = 'Message is required';
    }
    
    return errors;
};

export const hasValidationErrors = (errors: ValidationErrors): boolean => {
    return Object.keys(errors).length > 0;
};

export const getFirstValidationError = (errors: ValidationErrors): string | undefined => {
    return Object.values(errors).find(error => error);
};
