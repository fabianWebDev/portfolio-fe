import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Button onClick={() => navigate("/")}>Home</Button>
            <h1>Contact</h1>
            <ContactForm />
        </div>
    )
}

export default Contact;
