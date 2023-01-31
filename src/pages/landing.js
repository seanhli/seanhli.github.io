import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { signSwipe } from "../animations/signSwipe";

function Landing() {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const darkModeOn = useSelector(
    (state) => state.lightSwitchSlice.delayedDarkMode
  );

  function exit() {
    setIsPlaying(true);
    let swipeAnimation = signSwipe();
    swipeAnimation.play();
    setTimeout(() => {
      setIsPlaying(false);
      navigate("/about-me/");
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
                  onClick={isPlaying ? null : () => exit()}
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
    </>
  );
}

export default Landing;
