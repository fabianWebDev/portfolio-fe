import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import ContactForm from "../components/contact/ContactForm";
import ButtonsFrame from "../components/layout/ButtonsFrame";
import MainFrame from "../components/layout/MainFrame";
import SecondaryFrame from "../components/layout/SecondaryFrame";

const Contact = () => {
    const navigate = useNavigate();
    return (
        <MainFrame>
            <ButtonsFrame>
                <Button onClick={() => navigate("/")}>Home</Button>
                <Button onClick={() => navigate("/projects")}>Projects</Button>
            </ButtonsFrame>
            <SecondaryFrame>
                <h1 className="text-white">Contact</h1>
                <ContactForm />
                <a href="/" className="text-white">Go back to home</a>
            </SecondaryFrame>
            
        </MainFrame>
    )
}

export default Contact;
