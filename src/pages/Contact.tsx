import { useNavigate } from "react-router-dom";
import Button from "../components/button/Button";
import ContactForm from "../components/contact/ContactForm";
import ButtonsFrame from "../components/layout/ButtonsFrame";
import MainFrame from "../components/layout/MainFrame";
import SecondaryFrame from "../components/layout/SecondaryFrame";

const Contact = () => {
    const navigate = useNavigate();
    return (
        <MainFrame>
            <ButtonsFrame>
                <Button onClick={() => navigate("/")} variant="secondary">Home</Button>
                <Button onClick={() => navigate("/projects")} variant="secondary">Projects</Button>
            </ButtonsFrame>
            <SecondaryFrame>
                <h1 className="text-white mb-4">Contact</h1>
                <ContactForm />
                <Button onClick={() => navigate("/")} variant="secondary">Go back to home</Button>
            </SecondaryFrame>
            
        </MainFrame>
    )
}

export default Contact;
