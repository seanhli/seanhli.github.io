import { HashRouter, Routes, Route } from "react-router-dom";
import Background from "./background";
import Footer from "./footer";
import LightSwitch from "./lightSwitch";
import SideMenu from "./sideMenu";
import MainDisplay from "./pages/mainDisplay"
import Landing from "./pages/landing";

function App() {

  return (
    <HashRouter>
      <main>
        <Routes>
          <Route path="/" element={<MainDisplay/>}>
            <Route index element={<Landing/>}/>
            <Route path="about-me" element={<></>}/>
          </Route>
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
