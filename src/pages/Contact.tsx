import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import ContactForm from "../components/contact/ContactForm";
import ButtonsFrame from "../components/layout/ButtonsFrame";
import MainFrame from "../components/layout/MainFrame";

const Contact = () => {
    const navigate = useNavigate();
    return (
        <MainFrame>
            <ButtonsFrame>
                <Button onClick={() => navigate("/")}>Home</Button>
                <Button onClick={() => navigate("/projects")}>Projects</Button>
            </ButtonsFrame>
            <h1>Contact</h1>
            <ContactForm />
        </MainFrame>
    )
}

export default Contact;
