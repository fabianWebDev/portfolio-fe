import styles from './SocialIconsFrame.module.css';

const SocialIconsFrame = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles.socialIconsFrame}>
            {children}
        </div>
    )
}
export default SocialIconsFrame;