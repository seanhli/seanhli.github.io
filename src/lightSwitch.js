import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleLight, toggleDelay } from "./store/lightSwitchSlice";
import { backgroundSwitch } from "./animations/backgroundSwitch";

function LightSwitch() {
  const darkModeOn = useSelector((state) => state.lightSwitchSlice.darkMode);
  const dispatch = useDispatch();
  const [isPlaying, setIsPlaying] = useState(false);

  // on container click, animation will play
  // then moon/sun sign will flip a few times during the animation (transform rotateY 720deg+)
  // before switching to other sign (probably ending around 1s in)
  // once sign switches, dispatch will fire off and dark mode state in store will switch
  // during animation, on click will be disabled (use a local state to say animation is playing)
  // use ternary for img onclick: isPlaying ? null : lightSwitch()

  function flipLightSwitch(mode) {
    setIsPlaying(true);
    let bgTL = backgroundSwitch(!mode);
    bgTL.play();
    setTimeout(() => {
      dispatch(toggleLight(mode));
    }, 550);
    setTimeout(() => {
      setIsPlaying(false);
      dispatch(toggleDelay());
    }, bgTL.duration() * 1000);
  }

  return (
    <div className="light-switch-container">
      {darkModeOn && (
        <div className="dm-moon">
          <div className="dm-strings"></div>
          <img
            src={require("./assets/moon.png")}
            alt="moon"
            className="moon"
            onClick={isPlaying ? null : () => flipLightSwitch(false)}
          />
        </div>
      )}
      {!darkModeOn && (
        <div className="lm-sun">
          <div className="lm-strings"></div>
          <img
            src={require("./assets/sun.png")}
            alt="sun"
            className="sun"
            onClick={isPlaying ? null : () => flipLightSwitch(true)}
          />
        </div>
      )}
    </div>
  );
}

export default LightSwitch;
