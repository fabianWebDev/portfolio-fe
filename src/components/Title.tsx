import logo from '../assets/wizard-pixel.png';
import styles from './Title.module.css';

interface TitleProps {
    variant?: 'primary' | 'secondary';
    text?: string;
    showLogo?: boolean;
    titleLogo?: any;
}

const Title = ({ variant = 'primary', text = 'WizardOfCode', showLogo = true, titleLogo = logo }: TitleProps) => {
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
                <div className={styles.logoContainer}>
                    <img src={titleLogo} alt="logo" className={logoClass} />
                    {variant === 'primary' && (
                        <>
                            {/* Top sparks */}
                            <span className={styles.spark} style={{ "--x": "0px", "--y": "-60px" } as React.CSSProperties}>;</span>
                            <span className={styles.spark} style={{ "--x": "-25px", "--y": "-55px" } as React.CSSProperties}>#</span>
                            <span className={styles.spark} style={{ "--x": "25px", "--y": "-55px" } as React.CSSProperties}>@</span>
                            
                            {/* Top-right sparks */}
                            <span className={styles.spark} style={{ "--x": "45px", "--y": "-40px" } as React.CSSProperties}>?</span>
                            <span className={styles.spark} style={{ "--x": "60px", "--y": "-20px" } as React.CSSProperties}>!</span>
                            
                            {/* Right sparks */}
                            <span className={styles.spark} style={{ "--x": "70px", "--y": "0px" } as React.CSSProperties}>$</span>
                            <span className={styles.spark} style={{ "--x": "60px", "--y": "20px" } as React.CSSProperties}>%</span>
                            
                            {/* Bottom-right sparks */}
                            <span className={styles.spark} style={{ "--x": "45px", "--y": "40px" } as React.CSSProperties}>*</span>
                            <span className={styles.spark} style={{ "--x": "25px", "--y": "55px" } as React.CSSProperties}>+</span>
                            
                            {/* Bottom sparks */}
                            <span className={styles.spark} style={{ "--x": "0px", "--y": "60px" } as React.CSSProperties}>-</span>
                            <span className={styles.spark} style={{ "--x": "-25px", "--y": "55px" } as React.CSSProperties}>_</span>
                            
                            {/* Bottom-left sparks */}
                            <span className={styles.spark} style={{ "--x": "-45px", "--y": "40px" } as React.CSSProperties}>/</span>
                            <span className={styles.spark} style={{ "--x": "-60px", "--y": "20px" } as React.CSSProperties}>\</span>
                            
                            {/* Left sparks */}
                            <span className={styles.spark} style={{ "--x": "-70px", "--y": "0px" } as React.CSSProperties}>|</span>
                            <span className={styles.spark} style={{ "--x": "-60px", "--y": "-20px" } as React.CSSProperties}>-</span>
                            
                            {/* Top-left sparks */}
                            <span className={styles.spark} style={{ "--x": "-45px", "--y": "-40px" } as React.CSSProperties}>_</span>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}

export default Title;
