import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import wizardLogo from '../../assets/wizard.png';

const Navbar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        closeMenu();
    }, [location.pathname]);

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeMenu();
            }
        };

        if (isMenuOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <nav className={styles.navbarContainer}>
            <div className={styles.navbarLogo}>
                <Link to="/" className={styles.logoLink} onClick={closeMenu}>
                    <img src={wizardLogo} alt="Logo" />
                </Link>
            </div>

            <button
                className={styles.hamburgerButton}
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
            >
                <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
                <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
                <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
            </button>

            {isMenuOpen && (
                <div className={styles.overlay} onClick={closeMenu}></div>
            )}

            <div className={`${styles.navbarButtons} ${isMenuOpen ? styles.menuOpen : ''}`}>
                <Link
                    to="/"
                    className={`${styles.navButton} ${isActive('/') ? styles.active : ''}`}
                    onClick={closeMenu}
                >
                    Home
                </Link>
                <Link
                    to="/projects"
                    className={`${styles.navButton} ${isActive('/projects') ? styles.active : ''}`}
                    onClick={closeMenu}
                >
                    Projects
                </Link>
                <Link
                    to="/contact"
                    className={`${styles.navButton} ${isActive('/contact') ? styles.active : ''}`}
                    onClick={closeMenu}
                >
                    Contact
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;