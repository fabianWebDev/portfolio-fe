import Title from "../components/Title";
import Description from "../components/Description";
import MainFrame from "../components/layout/MainFrame";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import SocialIcon from "../components/SocialIcon";
import ButtonsFrame from "../components/layout/ButtonsFrame";
import SecondaryFrame from "../components/layout/SecondaryFrame";
import SocialIconsFrame from "../components/layout/SocialIconsFrame";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
    const navigate = useNavigate();

    const handleClickProjects = () => {
        navigate("/projects");
    }
    const handleClickContact = () => {
        navigate("/contact");
    }
    return (
        <MainFrame>
            <ButtonsFrame>
                <Button onClick={handleClickProjects}>Projects</Button>
                <Button onClick={handleClickContact}>Contact</Button>
            </ButtonsFrame>
            <SecondaryFrame>
                <Title />
                <Description />
            </SecondaryFrame>
            <SocialIconsFrame>
                <SocialIcon link="https://www.github.com">
                    <FaGithub />
                </SocialIcon>
                <SocialIcon link="https://www.linkedin.com">
                    <FaLinkedin />
                </SocialIcon>
                <SocialIcon link="https://www.instagram.com">
                    <FaInstagram />
                </SocialIcon>
            </SocialIconsFrame>
        </MainFrame>
    )
}

export default Home;