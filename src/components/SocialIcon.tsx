import classes from "./SocialIcon.module.css";

const SocialIcon = ({ children, link }: { children: React.ReactNode, link: string }) => {
    return (
        <div className={classes.socialIconContainer}>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <span className={classes.socialIcon}>{children}</span>
            </a>
        </div>
    )
}

export default SocialIcon;