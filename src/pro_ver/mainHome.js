import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleExiting, changeNextPage } from "../store/exitAnimationSlice";
import { mainContentExit } from "../animations/mainContentExit";
import { mainHomeEntrance } from "../animations/mainHomeEntrance";

function MainHome() {
  const exiting = useSelector((state) => state.exitAnimationSlice.exiting);
  const nextPage = useSelector((state) => state.exitAnimationSlice.nextPage);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (nextPage === "/") {
      dispatch(toggleExiting());
      const entranceAnim = mainHomeEntrance();
      entranceAnim.play();
    } else if (exiting) {
      exit(nextPage);
    }
  }, [exiting]); // eslint-disable-line

  function exit(path) {
    const exitAnim = mainContentExit();
    exitAnim.play();
    setTimeout(() => {
      dispatch(toggleExiting());
      //   exitAnim.time(0).kill()
      navigate(path);
    }, exitAnim.duration() * 1000);
  }

  return (
    <div className="home-container">
      <div className="home-text">
        <div className="home-title">
          <span>welcome</span>
        </div>
        <div className="home-subtitle">
          <span>learn more about Sean ⟶</span>
        </div>
      </div>
      <div className="home-hex-navi">
        <div
          className="home-hex"
          onClick={() => {
            dispatch(toggleExiting(true));
            dispatch(changeNextPage("/about-me/"));
          }}
        >
          <div className="hex-content">
            <img src={require("../assets/about-me-color.png")} alt="about me" />
            about me
          </div>
          <div className="hex-back-drop"></div>
        </div>
        <div
          className="home-hex"
          onClick={() => {
            dispatch(toggleExiting(true));
            dispatch(changeNextPage("/experiences/"));
          }}
        >
          <div className="hex-content">
            <img
              src={require("../assets/experiences-color.png")}
              alt="my experiences"
            />
            experiences
          </div>
          <div className="hex-back-drop"></div>
        </div>
        <div
          className="home-hex"
          onClick={() => {
            dispatch(toggleExiting(true));
            dispatch(changeNextPage("/projects/"));
          }}
        >
          <div className="hex-content">
            <img
              src={require("../assets/projects-color.png")}
              alt="my projects"
            />
            projects
          </div>
          <div className="hex-back-drop"></div>
        </div>
      </div>
    </div>
  );
}

export default MainHome;
