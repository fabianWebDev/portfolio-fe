import styles from './ButtonsFrame.module.css';

const ButtonsFrame = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles.buttonsFrame}>
            {children}
        </div>
    )
}
export default ButtonsFrame;