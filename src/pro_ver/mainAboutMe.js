import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleExiting } from "../store/exitAnimationSlice";
import { mainContentExit } from "../animations/mainContentExit";
import { mainContentEntrance } from "../animations/mainContentEntrance";
import Subtitle from "./subtitle";

function MainAboutMe() {
  const exiting = useSelector((state) => state.exitAnimationSlice.exiting);
  const nextPage = useSelector((state) => state.exitAnimationSlice.nextPage);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (nextPage === "/about-me/") {
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
      //   exitAnim.time(0).kill()
      navigate(path);
    }, exitAnim.duration() * 1000);
  }

  return (
    <>
      <div className="p-title-container">
        <div className="p-title">about SEAN LI</div>
      </div>
      <Subtitle prev="/" next="/experiences/" />
      <div className="p-content-container">
        <div className="about-me-grid">
          <div className="about-me-desc">
            Sean graduated from Dartmouth College in 2017 and has been in the
            tech industry ever since. Whether as a consultant, product manager,
            or software engineer, Sean is a problem solver first. His passion
            lies in building products that address real world needs and have
            meaningful, measurable impact. Through his journey at Mastercard,
            Advertise Purple, and Hack Reactor, Sean has accrued years of
            professional experience coding and collaborating with software
            engineers. Additionally, he has completed the Hack Reactor Advanced
            Software Immersive Program with flying colors. On all the teams he
            has been a part of, Sean has brought leadership, analytical rigor,
            and a fun team spirit to the table
          </div>
          <img
            className="p-about-me-photo"
            src={require("../assets/aboutmephoto.png")}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default MainAboutMe;
