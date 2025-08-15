import logo from '../assets/wizard.png';
import styles from './Title.module.css';

interface TitleProps {
    variant?: 'primary' | 'secondary';
    text?: string;
    showLogo?: boolean;
}

const Title = ({ variant = 'primary', text = 'Wizard of Code', showLogo = true }: TitleProps) => {
    const titleClass = variant === 'primary' 
        ? `${styles.title} ${styles.magicTitle}` 
        : `${styles.title} ${styles.secondaryTitle}`;
    
    const logoClass = variant === 'primary' 
        ? `${styles.logo} ${styles.magicLogo}` 
        : `${styles.logo} ${styles.secondaryLogo}`;

    return (
        <div className={styles.titleContainer}>
            <h1 className={titleClass}>{text}</h1>
            {showLogo && (
                <img src={logo} alt="logo" className={logoClass} />
            )}
        </div>
    );
}

export default Title;
