import classes from "./ProjectCard.module.css";

const ProjectCard = ({ title, description, image, link }: { title: string, description: string, image: string, link: string }) => {
    return (
        <div className={classes.projectCard}>
            <h1>{title}</h1>
            <p>{description}</p>
            <img src={image} alt={title} />
            <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
    )
}

export default ProjectCard;