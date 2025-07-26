import apiService from './axiosService';

// Define the interface for the contact message
export interface ContactMessage {
    name: string;
    phone: string;
    email: string;
    subject: string;
    message: string;
}

// Define the interface for the server response
export interface ContactResponse {
    id: number;
    name: string;
    phone: string;
    email: string;
    subject: string;
    message: string;
    created_at: string;
}

class ContactService {
    // Send contact message
    async sendMessage(contactData: ContactMessage): Promise<ContactResponse> {
        try {
            const response = await apiService.post<ContactResponse>('/contact', contactData);
            return response.data;
        } catch (error) {
            console.error('Error sending contact message:', error);
            throw error;
        }
    }
}

// Create and export an instance of the service
const contactService = new ContactService();

export default contactService;
