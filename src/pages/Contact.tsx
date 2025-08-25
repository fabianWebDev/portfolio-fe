import { useNavigate } from "react-router-dom";
import Button from "../components/button/Button";
import ContactForm from "../components/contact/ContactForm";
import MainFrame from "../components/layout/MainFrame";
import SecondaryFrame from "../components/layout/SecondaryFrame";
import Title from "../components/Title";
import logo from "../assets/magic-ball-pixel.png";
import Navbar from "../components/layout/Navbar";

const Contact = () => {
    const navigate = useNavigate();
    return (
        <MainFrame>
            <Navbar />
            <SecondaryFrame>
                <Title variant="secondary" text="Contact" titleLogo={logo} />
                <ContactForm />
                <Button onClick={() => navigate("/")} variant="tertiary">Go back to home</Button>
            </SecondaryFrame>
            
        </MainFrame>
    )
}

export default Contact;
