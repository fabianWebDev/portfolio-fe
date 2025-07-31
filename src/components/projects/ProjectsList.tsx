import { useProjects } from "../../hooks/useProjects";
import ProjectCard from "./ProjectCard";
import styles from './ProjectsList.module.css';

const ProjectsList = () => {
    const { projects } = useProjects();
    return (
        <>
            {projects.length === 0 ? (
                <div className="text-center text-gray-500">
                    No hay proyectos disponibles
                </div>
            ) : (
                <div className={styles.projectsListContainer}>
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
        </>
    )
}

export default ProjectsList;