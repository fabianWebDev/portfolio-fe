import { useNavigate } from "react-router-dom";
import Button from "../components/button/Button";
import ContactForm from "../components/contact/ContactForm";
import MainFrame from "../components/layout/MainFrame";
import SecondaryFrame from "../components/layout/SecondaryFrame";
import Title from "../components/Title";
import logo from "../assets/magic-ball-pixel.png";
import Navbar from "../components/layout/Navbar";
import SocialIcon from "../components/SocialIcon";
import SocialIconsFrame from "../components/layout/SocialIconsFrame";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SectionDescription from "../components/layout/SectionDescription";

const Contact = () => {
    const navigate = useNavigate();
    return (
        <MainFrame>
            <Navbar />
            <SecondaryFrame>
                <Title variant="secondary" text="Contact" titleLogo={logo} />
                <SectionDescription>
                    <p>
                        If you have any questions or want to work together, feel free to contact me or just shoot me an email at <a href="mailto:fabiancava22@gmail.com">fabiancava22@gmail.com</a>.
                    </p>
                </SectionDescription>
                <ContactForm />
                <Button onClick={() => navigate("/")} variant="tertiary">Go Back Home</Button>
            </SecondaryFrame>
            <SocialIconsFrame>
                <SocialIcon link="https://github.com/fabianWebDev">
                    <FaGithub />
                </SocialIcon>
                <SocialIcon link="https://www.linkedin.com/in/fabi%C3%A1n-campos-b992a1196/">
                    <FaLinkedin />
                </SocialIcon>
            </SocialIconsFrame>
        </MainFrame>
    )
}

export default Contact;
