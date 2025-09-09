import MainFrame from "../components/layout/MainFrame";
import SecondaryFrame from "../components/layout/SecondaryFrame";
import ProjectsList from "../components/projects/ProjectsList";
import Title from "../components/title/Title";
import Navbar from "../components/layout/Navbar";
import SocialIconsFrame from "../components/layout/SocialIconsFrame";
import SocialIcon from "../components/social/SocialIcon";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Projects = () => {
    return (
        <MainFrame>
            <Navbar />
            <SecondaryFrame>
                <Title variant="secondary" text="Projects" />
                <ProjectsList />
            </SecondaryFrame>
            <SocialIconsFrame>
                <SocialIcon link="https://www.github.com/fabianWebDev">
                    <FaGithub />
                </SocialIcon>
                <SocialIcon link="https://www.linkedin.com/in/fabian-campos-cr/">
                    <FaLinkedin />
                </SocialIcon>
            </SocialIconsFrame>
        </MainFrame>
    );
};

export default Projects;