import { useState } from "react";
import { menuAnimation } from "./animations/menuAnimation";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleExiting, changeNextPage } from "./store/exitAnimationSlice";

function SideMenu() {
  const [isPlaying, setIsPlaying] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function toggleMenu(state) {
    let [openBook, closeBook, openMenuTL, closeMenuTL] = menuAnimation();
    setIsPlaying(true);

    if (state) {
      closeBook.play();
      setTimeout(() => {
        closeMenuTL.play();
        setTimeout(() => {
          setIsPlaying(false);
        }, closeMenuTL.duration() * 1000);
      }, closeBook.duration() * 1000);
    } else {
      openBook.play();
      setTimeout(() => {
        openMenuTL.play();
        setTimeout(() => {
          setIsPlaying(false);
        }, openMenuTL.duration() * 1000);
      }, openBook.duration() * 1000);
    }
  }

  return (
    <>
      <div className="side-menu">
        <div className="menu-item">
          <img
            src={require("./assets/closed-book-color.png")}
            alt="closed menu"
            onClick={isPlaying ? null : () => toggleMenu(false)}
            className="menu-toggle"
            title="menu"
            id="closed-book"
          />
          <div className="nav-hint">
            <img
              src={require("./assets/arrow.png")}
              alt="pointer"
              className="nav-arrow"
            />
            <span>navigate here!</span>
          </div>
        </div>
        <div className="menu-item">
          <img
            src={require("./assets/open-book-color.png")}
            alt="opened menu"
            title="menu"
            onClick={isPlaying ? null : () => toggleMenu(true)}
            className="menu-toggle"
            id="opened-book"
          />
        </div>
        <img
          src={require("./assets/bar-color.png")}
          alt="bar"
          className="menu-bar-line"
          id="bar-1"
        />
        <div
          className="menu-item"
          onClick={() => {
            dispatch(toggleExiting(true));
            dispatch(changeNextPage("/cat/about-me/"));
          }}
        >
          <img
            src={require("./assets/about-me-color.png")}
            alt="about me"
            className="menu-icon"
            id="menu-icon-1"
          />
          <div className="menu-tag">about me</div>
        </div>
        <img
          src={require("./assets/bar-color.png")}
          alt="bar"
          className="menu-bar-line"
          id="bar-2"
        />
        <div
          className="menu-item"
          onClick={() => {
            dispatch(toggleExiting(true));
            dispatch(changeNextPage("/cat/experiences/"));
          }}
        >
          <img
            src={require("./assets/experiences-color.png")}
            alt="experiences"
            className="menu-icon"
            id="menu-icon-2"
          />
          <div className="menu-tag">my experiences</div>
        </div>
        <img
          src={require("./assets/bar-color.png")}
          alt="bar"
          className="menu-bar-line"
          id="bar-3"
        />
        <div
          className="menu-item"
          onClick={() => {
            dispatch(toggleExiting(true));
            dispatch(changeNextPage("/cat/projects/"));
          }}
        >
          <img
            src={require("./assets/projects-color.png")}
            alt="projects"
            className="menu-icon"
            id="menu-icon-3"
          />
          <div className="menu-tag">my projects</div>
        </div>
        <img
          src={require("./assets/bar-color.png")}
          alt="bar"
          className="menu-bar-line"
          id="bar-4"
        />
        <div
          className="menu-item"
          onClick={() => {
            dispatch(toggleExiting(true));
            dispatch(changeNextPage("/cat/contact-me/"));
          }}
        >
          <img
            src={require("./assets/contact-color.png")}
            alt="contact-me"
            className="menu-icon"
            id="menu-icon-4"
          />
          <div className="menu-tag">contact me</div>
        </div>
      </div>
      <div
        className="return-to-main-logo"
        title="main version"
        onClick={() => {
          navigate("/");
        }}
      ></div>
    </>
  );
}

export default SideMenu;
