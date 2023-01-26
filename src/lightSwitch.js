function LightSwitch() {

    // on container click, animation will play
    // then moon/sun sign will flip a few times during the animation (transform rotateY 720deg+)
    // before switching to other sign (probably ending around 1s in)
    // once sign switches, dispatch will fire off and dark mode state in store will switch
    // during animation, on click will be disabled (use a local state to say animation is playing)
    // use ternary for img onclick: isPlaying ? null : lightSwitch()

  return (
    <div className="light-switch-container">
      <div className="dm-moon">
        <div className="dm-strings"></div>
        <img
          src={require("./assets/moon.png")}
          alt="moon"
          className="moon"
        />
      </div>
    </div>
  );
}

export default LightSwitch;
