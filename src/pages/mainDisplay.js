import { Outlet } from "react-router-dom";

function MainDisplay() {
  return (
    <div className="cat-main-display">
      <div className="main-display">
        <Outlet />
      </div>
    </div>
  );
}

export default MainDisplay;
