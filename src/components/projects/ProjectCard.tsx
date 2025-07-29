import styles from './ProjectCard.module.css';

interface ProjectCardProps {
    title: string;
    description: string;
    image: string | null;
    link: string;
    technologies?: string[];
    githubUrl?: string;
    liveUrl?: string;
}

const ProjectCard = ({
    title,
    description,
    image,
    link,
    technologies = [],
    githubUrl,
    liveUrl
}: ProjectCardProps) => {
    const imageUrl = image || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzljYWE4ZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlbiBubyBkaXNwb25pYmxlPC90ZXh0Pjwvc3ZnPg==';

    return (
        <div className={styles.projectCard}>
            <h3>{title}</h3>
            <div>
                <img src={imageUrl} alt={title} />
            </div>

            <div>

                <p>{description}</p>

                {technologies.length > 0 && (
                    <div>
                        {technologies.map((tech, index) => (
                            <span key={index}>
                                {tech}
                            </span>
                        ))}
                    </div>
                )}

                <div>
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            🌐 Live Demo
                        </a>
                    )}

                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    )}

                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ver Proyecto
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;