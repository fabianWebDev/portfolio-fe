import { PropagateLoader } from "react-spinners";
import styles from "./Loading.module.css";

const Loading = () => {
    return (
        <div className={styles.loadingContainer}>
            <PropagateLoader color="#ffffff" />
        </div>
    );
};

export default Loading;