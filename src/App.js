import { HashRouter, Routes, Route } from "react-router-dom";
import Footer from "./footer";
import SideMenu from "./sideMenu";

function App() {

  return (
    <HashRouter>
      <main>
        <Routes>
        </Routes>
      </main>
      <SideMenu/>
      <Footer/>
    </HashRouter>
  );
}

export default App;
