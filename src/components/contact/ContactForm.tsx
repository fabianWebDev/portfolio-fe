import { useState, useEffect } from 'react';
import { useContact } from '../../hooks/useContact';
import type { ContactMessage } from '../../services/contactService';
import Input from './Input';
import TextArea from './TextArea';
import Button from '../button/Button';
import { showSuccess, showError } from '../toastify/Toastify';
import styles from './ContactForm.module.css';

const ContactForm = () => {
    const { sendMessage, loading, error, success, reset } = useContact();
    const [formData, setFormData] = useState<ContactMessage>({
        name: '',
        email: '',
        message: ''
    });
    const [validationErrors, setValidationErrors] = useState<Partial<ContactMessage>>({});

    const validateForm = (): boolean => {
        const errors: Partial<ContactMessage> = {};
        
        if (!formData.name.trim()) {
            errors.name = 'El nombre es requerido';
        }
        
        if (!formData.email.trim()) {
            errors.email = 'El email es requerido';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = 'El email no es válido';
        }
        
        if (!formData.message.trim()) {
            errors.message = 'El mensaje es requerido';
        }
        
        setValidationErrors(errors);
        
        // Show first validation error if any
        if (Object.keys(errors).length > 0) {
            const firstError = Object.values(errors).find(error => error);
            if (firstError) {
                showError(firstError);
            }
        }
        
        return Object.keys(errors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear validation error when user starts typing
        if (validationErrors[name as keyof ContactMessage]) {
            setValidationErrors(prev => ({
                ...prev,
                [name]: undefined
            }));
        }
    };

    const handleSubmit = async () => {
        // Validate form first
        if (!validateForm()) {
            return;
        }
        
        try {
            await sendMessage(formData);
        } catch (err) {
            console.log('❌ Error in handleSubmit:', err);
        }
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleSubmit();
    };

    useEffect(() => {
        if (success) {
            showSuccess('¡Mensaje enviado correctamente!');
            setFormData({
                name: '',
                email: '',
                message: ''
            });
            reset();
        }
    }, [success, reset]);

    useEffect(() => {
        if (error) {
            showError(`${error}`);
            reset();
        }
    }, [error, reset]);





    return (
        <form className={styles.contactForm + " col-xl-4"} onSubmit={handleFormSubmit}>
            <Input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required={false}
            />
            <Input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required={false}
            />
            <TextArea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required={false}
                rows={5}
            />
            <Button onClick={() => {}} variant="primary">
                {loading ? 'Sending...' : 'Send Message'}
            </Button>
        </form>
    );
};

export default ContactForm;