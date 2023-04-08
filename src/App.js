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

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<></>}>
          <Route path="profile" element={<></>}/>
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
