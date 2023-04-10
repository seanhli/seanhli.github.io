import { useNavigate } from "react-router-dom";

function SideNav() {
  const navigate = useNavigate();

  return (
    <>
      <div className="p-side-nav">
        <div className="p-side-nav-content">
          <div className="p-side-nav-icon">
            {/* icon on hover another sibling div should appear */}
            <img
              src={require("../assets/about-me-color.png")}
              alt="about me"
            />
            <div className="p-nav-icon-description">
              <div className="connecting-segment"></div>
              <div className="description-box">about me</div>
            </div>
          </div>
          <div className="p-side-nav-icon">
            {/* icon on hover another sibling div should appear */}
            <img
              src={require("../assets/experiences-color.png")}
              alt="experiences"
            />
            <div className="p-nav-icon-description">
              <div className="connecting-segment"></div>
              <div className="description-box">my experiences</div>
            </div>
          </div>
          <div className="p-side-nav-icon">
            {/* icon on hover another sibling div should appear */}
            <img
              src={require("../assets/projects-color.png")}
              alt="projects"
            />
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
