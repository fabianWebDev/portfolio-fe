import Title from "../components/Title";
import Description from "../components/Description";
import MainFrame from "../components/layout/MainFrame";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import SocialIcon from "../components/SocialIcon";
import IGLogo from "../assets/instagram.png";
import GithubLogo from "../assets/github.png";
import LinkedinLogo from "../assets/linkedin.png";
import ButtonsFrame from "../components/layout/ButtonsFrame";
import SecondaryFrame from "../components/layout/SecondaryFrame";
import SocialIconsFrame from "../components/layout/SocialIconsFrame";

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
                <SocialIcon icon={IGLogo} link="https://www.instagram.com" />
                <SocialIcon icon={GithubLogo} link="https://www.github.com" />
                <SocialIcon icon={LinkedinLogo} link="https://www.linkedin.com" />
            </SocialIconsFrame>
        </MainFrame>
    )
}

export default Home;