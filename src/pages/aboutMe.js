import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleExiting } from "../store/exitAnimationSlice";
import { aboutMeExitAnimation } from "../animations/aboutMeExit";
import Pager from "../pager";

function AboutMe() {
  const darkModeOn = useSelector(
    (state) => state.lightSwitchSlice.delayedDarkMode
  );
  const [photo, setPhoto] = useState(true);
  const exiting = useSelector((state) => state.exitAnimationSlice.exiting);
  const nextPage = useSelector((state) => state.exitAnimationSlice.nextPage);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (nextPage === "/about-me/") {
      dispatch(toggleExiting());
    } else if (exiting) {
      exit(nextPage);
    }
  }, [exiting]); // eslint-disable-line

  function exit(path) {
    const amExit = aboutMeExitAnimation();
    amExit.play()
    setTimeout(() => {
      dispatch(toggleExiting());
      navigate(path);
    }, amExit.duration() * 1000);
  }

  return (
    <>
      <img
        className="am-cat-paw"
        src={require(`../assets/${darkModeOn ? "grey" : "dark"}-paw-back.png`)}
        alt="paw"
      />
      <div className="exit-paw">
        <img
          className="paint-roller"
          src={require(`../assets/paint-roller-${
            darkModeOn ? "dark" : "light"
          }-lg.jpg`)}
          alt="paint-roller"
        />
        <img
          className="am-cat-paw-exit"
          src={require(`../assets/${
            darkModeOn ? "grey" : "dark"
          }-paw-back.png`)}
          alt="paw"
        />
      </div>
      <div className="am-paper">
        <div className="tape-section"></div>
        <div className="paper-text">
          <div className="am-title">a bit about me</div>
          <div className="am-content">
            Sean graduated from Dartmouth College in 2017 and has been in the
            tech industry ever since. Whether as a consultant, product manager,
            or now software engineer, Sean is a problem solver first. His
            passion lies in building products that address real world needs and
            have meaningful, measurable impact. While recently transitioned to
            the role of software engineer, Sean already has years of
            professional experience coding, collaborating with software
            engineers, and completing the Hack Reactor Advanced Software
            Immersive Program with flying colors
          </div>
        </div>
        <div className="tape-section"></div>
      </div>
      {photo && (
        <div
          className="photo-stick"
          onClick={() => {
            setPhoto(false);
          }}
          title="click to hide"
        >
          <div className="picture-frame">
            <img src={require("../assets/Sliphoto.png")} alt="sli" />
          </div>
          <div className="stick"></div>
        </div>
      )}
      <Pager prev='/' next='/experiences/'/>
    </>
  );
}

export default AboutMe;
