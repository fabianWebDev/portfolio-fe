import MainFrame from "../components/layout/MainFrame";
import SecondaryFrame from "../components/layout/SecondaryFrame";
import ProjectsList from "../components/projects/ProjectsList";
import Title from "../components/Title";
import logo from "../assets/magic-wand-pixel.png";
import Navbar from "../components/layout/Navbar";
import SocialIconsFrame from "../components/layout/SocialIconsFrame";
import SocialIcon from "../components/SocialIcon";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Projects = () => {
    return (
        <MainFrame>
            <Navbar />
            <SecondaryFrame>
                <Title variant="secondary" text="Projects" titleLogo={logo} />
                <ProjectsList />
            </SecondaryFrame>
            <SocialIconsFrame>
                <SocialIcon link="https://www.github.com/fabianWebDev">
                    <FaGithub />
                </SocialIcon>
                <SocialIcon link="https://www.linkedin.com/in/fabi%C3%A1n-campos-b992a1196/">
                    <FaLinkedin />
                </SocialIcon>
                {/* <SocialIcon link="https://www.instagram.com">
                    <FaInstagram />
                </SocialIcon> */}
            </SocialIconsFrame>
        </MainFrame>
    );
};

export default Projects;