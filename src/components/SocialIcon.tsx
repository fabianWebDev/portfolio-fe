import classes from "./SocialIcon.module.css";

const SocialIcon = ({ icon, link }: { icon: string, link: string }) => {
    return (
        <div className={classes.socialIconContainer}>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={icon} alt="Social Icon" className={classes.socialIcon} />
            </a>
        </div>
    )
}

export default SocialIcon;