import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleExiting } from "../store/exitAnimationSlice";
import { mainContentExit } from "../animations/mainContentExit";
import { mainContentEntrance } from "../animations/mainContentEntrance";
import Subtitle from "./subtitle";

function MainProjects() {
  const exiting = useSelector((state) => state.exitAnimationSlice.exiting);
  const nextPage = useSelector((state) => state.exitAnimationSlice.nextPage);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (nextPage === "/projects/") {
      dispatch(toggleExiting());
      const entranceAnim = mainContentEntrance();
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
    //   exitAnim.time(0).kill();
      navigate(path);
    }, exitAnim.duration() * 1000);
  }

  return (
    <>
      <div className="p-title-container">
        <div className="p-title">my projects</div>
      </div>
      <Subtitle prev="/experiences/" next="/" />
      <div className="p-content-container">{nextPage}</div>
    </>
  );
}

export default MainProjects;
