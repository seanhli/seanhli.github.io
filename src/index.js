import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./store/store";
import { Provider } from "react-redux";
import "./css/pro_ver/main.css";
import "./css/cat/main.css";
import "./css/cat/sideMenu.css";
import "./css/cat/footer.css";
import "./css/cat/lightswitch.css";
import "./css/cat/landing.css";
import "./css/cat/aboutMe.css";
import "./css/cat/experiences.css";
import "./css/cat/projects.css";
import "./css/cat/contactMe.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
