import styles from './Title.module.css';

interface TitleProps {
    variant?: 'primary' | 'secondary';
    text?: string;
    showLogo?: boolean;
    titleLogo?: any;
}

const Title = ({ variant = 'primary', text = 'WizardOfCode' }: TitleProps) => {
    const titleClass = variant === 'primary'
        ? `${styles.title} ${styles.magicTitle}`
        : `${styles.title} ${styles.secondaryTitle}`;

    return (
        <div className={styles.titleContainer}>
            <h1 className={titleClass}>{text}</h1>
        </div>
    );
}

export default Title;
