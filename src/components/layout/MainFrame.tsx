import classes from "./MainFrame.module.css";

const MainFrame = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={classes.mainFrame}>
            {children}
        </div>
    )
}

export default MainFrame;