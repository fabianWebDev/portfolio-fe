import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import MainFrame from "../components/layout/MainFrame";
import ButtonsFrame from "../components/layout/ButtonsFrame";
import SecondaryFrame from "../components/layout/SecondaryFrame";
import ProjectsList from "../components/projects/ProjectsList";

const Projects = () => {
    const navigate = useNavigate();
    return (
        <MainFrame>
            <ButtonsFrame>
                <Button onClick={() => navigate("/")}>Home</Button>
                <Button onClick={() => navigate("/contact")}>Contact</Button>
            </ButtonsFrame>
            <SecondaryFrame>
                <h1>Projects</h1>
                <ProjectsList />
            </SecondaryFrame>
        </MainFrame>
    );
};

export default Projects;