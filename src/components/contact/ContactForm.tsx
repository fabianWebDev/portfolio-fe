import { useState } from 'react';
import { useContact } from '../../hooks/useContact';
import type { ContactMessage } from '../../services/contactService';

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
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
        <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            
            <div className="form-group">
                <input
                    type="tel"
                    name="phone"
                    placeholder="Teléfono"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
            </div>
            
            <div className="form-group">
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            
            <div className="form-group">
                <input
                    type="text"
                    name="subject"
                    placeholder="Asunto"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                />
            </div>
            
            <div className="form-group">
                <textarea
                    name="message"
                    placeholder="Mensaje"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                />
            </div>
            
            <button type="submit" disabled={loading}>
                {loading ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
            
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