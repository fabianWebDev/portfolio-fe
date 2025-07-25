import ProjectCard from "../components/projects/ProjectCard";
import { useProjects } from "../hooks/useProjects";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Projects = () => {
    const { projects } = useProjects();
    const navigate = useNavigate();
    return (
        <div className="container mx-auto px-4 py-8">
            <Button onClick={() => navigate("/")}>Home</Button>
            <h1 className="text-3xl font-bold text-center mb-8">Mis Proyectos</h1>

            {projects.length === 0 ? (
                <div className="text-center text-gray-500">
                    No hay proyectos disponibles
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </div>
    );
};

export default Projects;