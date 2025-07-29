import styles from './PresentationFrame.module.css';

const PresentationFrame = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles.presentationFrame}>
            {children}
        </div>
    )
}
export default PresentationFrame;