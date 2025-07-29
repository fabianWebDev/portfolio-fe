import ProjectCard from "../components/projects/ProjectCard";
import { useProjects } from "../hooks/useProjects";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import MainFrame from "../components/layout/MainFrame";
import ButtonsFrame from "../components/layout/ButtonsFrame";
import SecondaryFrame from "../components/layout/SecondaryFrame";

const Projects = () => {
    const { projects } = useProjects();
    const navigate = useNavigate();
    return (
        <MainFrame>
            <ButtonsFrame>
                <Button onClick={() => navigate("/")}>Home</Button>
                <Button onClick={() => navigate("/contact")}>Contact</Button>
            </ButtonsFrame>
            <SecondaryFrame>
                <h1>Mis Proyectos</h1>

                {projects.length === 0 ? (
                    <div className="text-center text-gray-500">
                        No hay proyectos disponibles
                    </div>
                ) : (
                    <div>
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                title={project.name}
                                description={project.short_description}
                                image={project.image || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzljYWE4ZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlbiBubyBkaXNwb25pYmxlPC90ZXh0Pjwvc3ZnPg=='}
                                link={project.link}
                                technologies={project.tech_list}
                                githubUrl={project.github_url}
                                liveUrl={undefined}
                            />
                        ))}
                    </div>
                )}
            </SecondaryFrame>
        </MainFrame>
    );
};

export default Projects;