import logo from '../assets/wizard.png';
import styles from './Title.module.css';

const Title = () => {
    return (
        <div className={styles.titleContainer}>
            <h1 className={`${styles.title} ${styles.magicTitle}`}>Wizard of Code</h1>
            <img src={logo} alt="logo" className={`${styles.logo} ${styles.magicLogo}`} />
        </div>
    );
}

export default Title;
