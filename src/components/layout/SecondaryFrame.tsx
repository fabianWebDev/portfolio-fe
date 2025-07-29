import styles from './SecondaryFrame.module.css';

const SecondaryFrame = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles.secondaryFrame}>
            {children}
        </div>
    )
}
export default SecondaryFrame;