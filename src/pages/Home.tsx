import Title from "../components/Title";
import Description from "../components/Description";
import MainFrame from "../components/layout/MainFrame";
import SocialIcon from "../components/SocialIcon";
import SecondaryFrame from "../components/layout/SecondaryFrame";
import SocialIconsFrame from "../components/layout/SocialIconsFrame";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Navbar from "../components/layout/Navbar";

const Home = () => {
    return (
        <MainFrame>
            <Navbar />
            <SecondaryFrame>
                <Title />
                <Description />
            </SecondaryFrame>
            <SocialIconsFrame>
                <SocialIcon link="https://www.github.com/fabianWebDev">
                    <FaGithub />
                </SocialIcon>
                <SocialIcon link="https://www.linkedin.com/in/fabi%C3%A1n-campos-b992a1196/">
                    <FaLinkedin />
                </SocialIcon>
            </SocialIconsFrame>
        </MainFrame>
    )
}

export default Home;