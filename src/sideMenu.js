import { useState } from "react";

function SideMenu() {
  const [openMenu, setOpenMenu] = useState(false);

  function toggleMenu(state) {
    if (state) {
        setOpenMenu(false)
    } else {
        setOpenMenu(true)
    }
  }

  return (
    <div className="side-menu">
      {!openMenu && (
        <div className="menu-item">
          <img
            src={require("./assets/closed-book-color.png")}
            alt="open menu"
            onClick={() => toggleMenu(openMenu)}
            className="menu-icon"
          />
          <div className="menu-tag">menu</div>
        </div>
      )}
      {openMenu && (
        <>
          <div className="menu-item">
            <img
              src={require("./assets/open-book-color.png")}
              alt="close menu"
              onClick={() => toggleMenu(openMenu)}
              className="menu-icon"
            />
          </div>
          <img
            src={require("./assets/bar-color.png")}
            alt="bar"
            className="menu-bar-line"
          />
          <div className="menu-item">
            <img
              src={require("./assets/about-me-color.png")}
              alt="about me"
              className="menu-icon"
            />
            <div className="menu-tag">about me</div>
          </div>
          <img
            src={require("./assets/bar-color.png")}
            alt="bar"
            className="menu-bar-line"
          />
          <div className="menu-item">
            <img
              src={require("./assets/experiences-color.png")}
              alt="experiences"
              className="menu-icon"
            />
            <div className="menu-tag">my experiences</div>
          </div>
          <img
            src={require("./assets/bar-color.png")}
            alt="bar"
            className="menu-bar-line"
          />
          <div className="menu-item">
            <img
              src={require("./assets/projects-color.png")}
              alt="projects"
              className="menu-icon"
            />
            <div className="menu-tag">my projects</div>
          </div>
        </>
      )}
    </div>
  );
}

export default SideMenu;
