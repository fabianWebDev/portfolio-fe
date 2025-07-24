import Title from "../components/Title";
import Description from "../components/Description";
import MainFrame from "../components/layout/MainFrame";
import Button from "../components/Button";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import SocialIcon from "../components/SocialIcon";
import IGLogo from "../assets/instagram.png";
import GithubLogo from "../assets/github.png";
import LinkedinLogo from "../assets/linkedin.png";

const Home = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    }
    return (
        <MainFrame>
            <Button onClick={handleClick}>{count}</Button>
            <Button onClick={handleClick}>{count}</Button>
            <Title />
            <Description />
            <SocialIcon icon={IGLogo} link="https://www.instagram.com" />
            <SocialIcon icon={GithubLogo} link="https://www.github.com" />
            <SocialIcon icon={LinkedinLogo} link="https://www.linkedin.com" />
        </MainFrame>
    )
}

export default Home;