import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

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

    // Cerrar menú al cambiar de ruta
    useEffect(() => {
        closeMenu();
    }, [location.pathname]);

    // Cerrar menú al presionar Escape
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
        <nav>
            <div className={styles.navbarContainer}>
                <div className={styles.navbarLogo}>
                    <Link to="/" className={styles.logoLink} onClick={closeMenu}>
                        <img src="/src/assets/wizard.png" alt="Logo" /> 
                    </Link>
                </div>
                
                {/* Botón hamburguesa para móviles */}
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
                
                {/* Overlay para cerrar menú */}
                {isMenuOpen && (
                    <div className={styles.overlay} onClick={closeMenu}></div>
                )}
                
                {/* Menú de navegación */}
                <div className={`${styles.navbarButtons} ${isMenuOpen ? styles.menuOpen : ''}`}>
                    <Link 
                        to="/projects" 
                        className={`${styles.navButton} ${isActive('/projects') ? styles.active : ''}`}
                        onClick={closeMenu}
                    >
                        Proyectos
                    </Link>
                    <Link 
                        to="/contact" 
                        className={`${styles.navButton} ${isActive('/contact') ? styles.active : ''}`}
                        onClick={closeMenu}
                    >
                        Contacto
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;