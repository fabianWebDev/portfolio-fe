import Button from "../components/button/Button";
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
                <Button onClick={() => navigate("/")} variant="secondary">Home</Button>
                <Button onClick={() => navigate("/contact")} variant="secondary">Contact</Button>
            </ButtonsFrame>
            <SecondaryFrame>
                <h1 className="text-white">Projects</h1>
                <ProjectsList />
            </SecondaryFrame>
        </MainFrame>
    );
};

export default Projects;