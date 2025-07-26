import { useState } from 'react';
import contactService from '../services/contactService';
import type { ContactMessage, ContactResponse } from '../services/contactService';

interface UseContactReturn {
    sendMessage: (contactData: ContactMessage) => Promise<void>;
    loading: boolean;
    error: string | null;
    success: boolean;
    reset: () => void;
}

export const useContact = (): UseContactReturn => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const sendMessage = async (contactData: ContactMessage) => {
        try {
            setLoading(true);
            setError(null);
            setSuccess(false);
            
            await contactService.sendMessage(contactData);
            setSuccess(true);
        } catch (err: any) {
            console.error('Error al enviar mensaje de contacto:', err);
            setError(err.message || 'Error al enviar el mensaje');
        } finally {
            setLoading(false);
        }
    };

    const reset = () => {
        setLoading(false);
        setError(null);
        setSuccess(false);
    };

    return {
        sendMessage,
        loading,
        error,
        success,
        reset,
    };
}; 