import { HashRouter, Routes, Route } from "react-router-dom";
import Background from "./background";
import Footer from "./footer";
import LightSwitch from "./lightSwitch";
import SideMenu from "./sideMenu";
import MainDisplay from "./pages/mainDisplay"
import Landing from "./pages/landing";
import AboutMe from "./pages/aboutMe";
import Experiences from "./pages/experiences";
import Projects from "./pages/projects";
import ContactMe from "./pages/contactMe";
import MainPage from "./pro_ver/mainPage";
import SideNav from "./pro_ver/sideNav";
import MainFooter from "./pro_ver/footer";
import ProBackground from "./pro_ver/proBackground";
import MainAboutMe from "./pro_ver/mainAboutMe";
import MainExperiences from "./pro_ver/mainExperiences";
import MainProjects from "./pro_ver/mainProjects";

function App() {

  return (
    <HashRouter>
      <Routes>
        {/* Main ver of site */}
        <Route path="/" element={<><MainPage/><ProBackground/><SideNav/><MainFooter/></>}>
          <Route index element={<><MainAboutMe/></>}/>
          <Route path="experiences" element={<MainExperiences/>}/>
          <Route path="projects" element={<MainProjects/>}/>
        </Route>
        {/* Route for fun cat version of personal site */}
        <Route path="/cat/" element={<><MainDisplay/><Background/><SideMenu/><LightSwitch/><Footer/></>}>
          <Route index element={<Landing/>}/>
          <Route path="about-me" element={<AboutMe/>}/>
          <Route path="experiences" element={<Experiences/>}/>
          <Route path="projects" element={<Projects/>}/>
          <Route path="contact-me" element={<ContactMe/>}/>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
