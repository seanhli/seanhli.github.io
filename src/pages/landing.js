import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signSwipe } from "../animations/signSwipe";
import { toggleExiting, changeNextPage } from "../store/exitAnimationSlice";
import Pager from "../pager";

function Landing() {
  const navigate = useNavigate();
  const darkModeOn = useSelector(
    (state) => state.lightSwitchSlice.delayedDarkMode
  );
  const exiting = useSelector((state) => state.exitAnimationSlice.exiting);
  const nextPage = useSelector((state) => state.exitAnimationSlice.nextPage);
  const dispatch = useDispatch();

  useEffect(() => {
    if (exiting) {
      exit(nextPage);
    }
  }, [exiting]); // eslint-disable-line

  function exit(path) {
    let swipeAnimation = signSwipe();
    swipeAnimation.play();
    setTimeout(() => {
      dispatch(toggleExiting());
      navigate(path);
    }, swipeAnimation.duration() * 1000);
  }

  return (
    <>
      <div className="hanging-display">
        <div className="hanging-strings"></div>
        <div className="hanging-sign">
          <div className="center-container">
            <div className="text-container">
              <div className="name-label">SEAN LI</div>
            </div>
            <div>
              <div className="text-container">
                <div
                  className="sub-label"
                  onClick={
                    exiting
                      ? null
                      : () => {
                          dispatch(changeNextPage("/about-me/"));
                          dispatch(toggleExiting(true));
                        }
                  }
                >
                  ENTER?&nbsp;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="sign-cat-paw"
        src={require(`../assets/${darkModeOn ? "grey" : "dark"}-paw-back.png`)}
        alt="paw"
      />
      <Pager prev='/contact-me/' next='/about-me/'/>
    </>
  );
}

export default Landing;
