import styles from './Description.module.css';

const Description = () => {
    return (
        <div className={styles.descriptionContainer}>
            <p className={styles.description}>
                Hi, I’m <span className={styles.highlight}>Fabián Campos</span> — a software engineer with more than
                <span className={styles.highlight}> 6 years</span> of experience building
                <span className={styles.highlight}> solid, intuitive, and results-driven</span> web solutions.
                I specialize in <span className={styles.highlight}>backend development with Python and Django</span>,
                as well as <span className={styles.highlight}>frontend development with React</span>.
                I enjoy turning complex ideas into clean, functional, and well-structured applications by combining
                <span className={styles.highlight}>logic</span>, <span className={styles.highlight}>design</span>,
                and <span className={styles.highlight}>best development practices</span>.
                <br /><br />
                <span className={styles.highlightBig}>Wizard of Code</span> isn’t just a catchy name —
                it’s my work philosophy: <span className={styles.highlight}>solving problems efficiently, sustainably, and with purpose</span>.
                I believe software is a tool to <span className={styles.highlight}>improve lives</span>,
                <span className={styles.highlight}>streamline processes</span>, and
                <span className={styles.highlight}>connect people</span>.
                I fully commit to every project, bringing both technical and human insight — because it’s
                <span className={styles.highlight}>not just about making things work</span>,
                it’s about <span className={styles.highlight}>making them work well and with meaning</span>.
            </p>
        </div>
    )
}

export default Description;