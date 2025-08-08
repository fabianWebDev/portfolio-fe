import classes from "./MainFrame.module.css";

const MainFrame = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={classes.mainFrame + " container"}>
            {children}
        </div>
    )
}

export default MainFrame;