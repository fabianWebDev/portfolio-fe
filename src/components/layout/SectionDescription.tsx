import styles from './SectionDescription.module.css';

const SectionDescription = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles.sectionDescription}>
           <div className={styles.sectionDescriptionContent}>{children}</div>
        </div>
    )
}

export default SectionDescription;