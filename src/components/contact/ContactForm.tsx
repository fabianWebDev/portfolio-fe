import { useState } from 'react';
import { useContact } from '../../hooks/useContact';
import type { ContactMessage } from '../../services/contactService';
import Input from './Input';
import TextArea from './TextArea';
import Button from '../button/Button';
import styles from './ContactForm.module.css';

const ContactForm = () => {
    const { sendMessage, loading, error, success, reset } = useContact();
    const [formData, setFormData] = useState<ContactMessage>({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        await sendMessage(formData);

        // Limpiar formulario si el envío fue exitoso
        if (success) {
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        }
    };

    return (
        <form className={styles.contactForm + " col-xl-4"}>
            <Input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <Input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <TextArea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
            />
            <Button onClick={() => handleSubmit()} variant="primary">
                {loading ? 'Sending...' : 'Send Message'}
            </Button>

            {error && (
                <div className="error-message">
                    Error: {error}
                </div>
            )}
            {success && (
                <div className="success-message">
                    Message sent successfully!
                </div>
            )}
        </form>
    );
};

export default ContactForm;