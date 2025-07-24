import ProjectCard from "../components/projects/ProjectCard";

const Projects = () => {
    return (
        <div>
            <h1>Projects</h1>
            <ProjectCard title="Project 1" description="Description 1" image="https://via.placeholder.com/150" link="https://www.google.com" />
            <ProjectCard title="Project 2" description="Description 2" image="https://via.placeholder.com/150" link="https://www.google.com" />
            <ProjectCard title="Project 3" description="Description 3" image="https://via.placeholder.com/150" link="https://www.google.com" />
        </div>
    )
}

export default Projects;