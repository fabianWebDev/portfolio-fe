import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    return (
        <nav>
            <div className={styles.navbarContainer}>
                <div className={styles.navbarLogo}>
                    <Link to="/" className={styles.logoLink}>
                        <img src="/src/assets/wizard.png" alt="Logo" /> 
                    </Link>
                </div>
                
                <div className={styles.navbarButtons}>
                    <Link 
                        to="/projects" 
                        className={`${styles.navButton} ${isActive('/projects') ? styles.active : ''}`}
                    >
                        Proyectos
                    </Link>
                    <Link 
                        to="/contact" 
                        className={`${styles.navButton} ${isActive('/contact') ? styles.active : ''}`}
                    >
                        Contacto
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;