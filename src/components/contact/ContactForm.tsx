import { useState } from 'react';
import { useContact } from '../../hooks/useContact';
import type { ContactMessage } from '../../services/contactService';
import Input from './Input';
import Button from '../Button';
import styles from './ContactForm.module.css';

const ContactForm = () => {
    const { sendMessage, loading, error, success, reset } = useContact();
    const [formData, setFormData] = useState<ContactMessage>({
        name: '',
        phone: '',
        email: '',
        subject: '',
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
                phone: '',
                email: '',
                subject: '',
                message: ''
            });
        }
    };

    return (
        <form className={styles.contactForm}>
            <div>
                <Input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                <Input
                    type="tel"
                    name="phone"
                    placeholder="Teléfono"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                <Input
                    type="text"
                    name="subject"
                    placeholder="Asunto"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                <Input
                    type="text"
                    name="message"
                    placeholder="Mensaje"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
            </div>

            <Button onClick={() => handleSubmit()}>
                {loading ? 'Enviando...' : 'Enviar Mensaje'}
            </Button>

            {error && (
                <div className="error-message">
                    Error: {error}
                </div>
            )}

            {success && (
                <div className="success-message">
                    ¡Mensaje enviado exitosamente!
                </div>
            )}
        </form>
    );
};

export default ContactForm;