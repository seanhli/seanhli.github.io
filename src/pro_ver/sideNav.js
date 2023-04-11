import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleExiting, changeNextPage } from "../store/exitAnimationSlice";

function SideNav() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <div className="p-side-nav">
        <div className="p-side-nav-content">
          <div
            className="p-side-nav-icon"
            onClick={() => {
              dispatch(toggleExiting(true));
              dispatch(changeNextPage("/"));
            }}
          >
            <img src={require("../assets/about-me-color.png")} alt="about me" />
            <div className="p-nav-icon-description">
              <div className="connecting-segment"></div>
              <div className="description-box">about me</div>
            </div>
          </div>
          <div
            className="p-side-nav-icon"
            onClick={() => {
              dispatch(toggleExiting(true));
              dispatch(changeNextPage("/experiences/"));
            }}
          >
            <img
              src={require("../assets/experiences-color.png")}
              alt="experiences"
            />
            <div className="p-nav-icon-description">
              <div className="connecting-segment"></div>
              <div className="description-box">my experiences</div>
            </div>
          </div>
          <div
            className="p-side-nav-icon"
            onClick={() => {
              dispatch(toggleExiting(true));
              dispatch(changeNextPage("/projects/"));
            }}
          >
            <img src={require("../assets/projects-color.png")} alt="projects" />
            <div className="p-nav-icon-description">
              <div className="connecting-segment"></div>
              <div className="description-box">my projects</div>
            </div>
          </div>
        </div>
        <div
          className="p-side-nav-logo"
          title="cat version"
          onClick={() => {
            navigate("/cat/");
          }}
        ></div>
      </div>
    </>
  );
}

export default SideNav;
