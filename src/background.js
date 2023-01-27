import { useSelector } from "react-redux";

function Background() {
  const dmOn = useSelector((state) => state.lightSwitchSlice.delayedDarkMode)

  return (
    <>
      <div className="background-dark"></div>
      <div className="background-light"></div>
      <div className="bg-cat-paw">
        <img
          src={require(`./assets/${
            dmOn ? "grey" : "dark"
          }-paw-back.png`)}
          alt="paw"
        />
      </div>
    </>
  );
}

export default Background;
