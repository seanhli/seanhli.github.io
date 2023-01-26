import { HashRouter, Routes, Route } from "react-router-dom";
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
      <SideMenu/>
      <LightSwitch/>
      <Footer/>
    </HashRouter>
  );
}

export default App;
