import styles from './Button.module.css';

const Button = ({ children, onClick, variant = 'primary' }: { children: React.ReactNode, onClick: () => void, variant?: 'primary' | 'secondary' | 'tertiary' }) => {
    return (
        <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>{children}</button>
    )
}

export default Button;