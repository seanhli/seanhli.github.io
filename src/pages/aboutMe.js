import { useSelector } from "react-redux";

function AboutMe() {
  const darkModeOn = useSelector(
    (state) => state.lightSwitchSlice.delayedDarkMode
  );

  return (
    <>
      <img
        className="am-cat-paw"
        src={require(`../assets/${darkModeOn ? "grey" : "dark"}-paw-back.png`)}
        alt="paw"
      />
      <div className="am-paper">
        <div className="tape-section"></div>
        <div className="paper-text">
          <div className="am-title">a bit about me</div>
          <div className="am-content">
            Sean graduated from Dartmouth College in 2017 and ever since, he has
            been in the tech industry. Whether as a consultant, product manager,
            or now software engineer, Sean is a problem solver first. His
            passion lies in building products that address real world needs and
            have meaningful and measurable impact. While recently formally
            transitioned to the role of software engineer, Sean already has
            years of professional experience with coding and has completed the
            Hack Reactor Advanced Software Immersive Program with flying colors
          </div>
        </div>
        <div className="tape-section"></div>
      </div>
      <div className="photo-stick">
        <div className="picture-frame">
          <img src={require("../assets/Sliphoto.png")} alt="sli" />
        </div>
        <div className="stick"></div>
      </div>
    </>
  );
}

export default AboutMe;
