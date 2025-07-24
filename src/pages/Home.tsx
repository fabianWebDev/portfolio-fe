import Title from "../components/Title";
import Description from "../components/Description";
import MainFrame from "../components/layout/MainFrame";
import Button from "../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SocialIcon from "../components/SocialIcon";
import IGLogo from "../assets/instagram.png";
import GithubLogo from "../assets/github.png";
import LinkedinLogo from "../assets/linkedin.png";

const Home = () => {
    const navigate = useNavigate();

    const handleClickProjects = () => {
        navigate("/projects");
    }
    const handleClickContact = () => {
        navigate("/contact");
    }
    return (
        <MainFrame>
            <Button onClick={handleClickProjects}>Projects</Button>
            <Button onClick={handleClickContact}>Contact</Button>
            <Title />
            <Description />
            <SocialIcon icon={IGLogo} link="https://www.instagram.com" />
            <SocialIcon icon={GithubLogo} link="https://www.github.com" />
            <SocialIcon icon={LinkedinLogo} link="https://www.linkedin.com" />
        </MainFrame>
    )
}

export default Home;