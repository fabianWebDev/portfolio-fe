import MainFrame from "../components/layout/MainFrame";
import SecondaryFrame from "../components/layout/SecondaryFrame";
import ProjectsList from "../components/projects/ProjectsList";
import Title from "../components/Title";
import logo from "../assets/magic-wand.png";
import Navbar from "../components/layout/Navbar";

const Projects = () => {
    return (
        <MainFrame>
            <Navbar />
            <SecondaryFrame>
                <Title variant="secondary" text="Projects" titleLogo={logo} />
                <ProjectsList />
            </SecondaryFrame>
        </MainFrame>
    );
};

export default Projects;