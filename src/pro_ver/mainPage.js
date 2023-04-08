import { Outlet } from "react-router-dom";

function MainPage() {

    return (
        <div className="p-main-content">
            <Outlet/>
        </div>
    )

}

export default MainPage;
