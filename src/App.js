import { HashRouter, Routes, Route } from "react-router-dom";
import Background from "./background";
import Footer from "./footer";
import LightSwitch from "./lightSwitch";
import SideMenu from "./sideMenu";

function App() {

  return (
    <HashRouter>
      <main>
        <Routes>
        </Routes>
      </main>
      <Background/>
      <SideMenu/>
      <LightSwitch/>
      <Footer/>
    </HashRouter>
  );
}

export default App;
