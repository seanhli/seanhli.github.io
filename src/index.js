import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./store/store";
import { Provider } from "react-redux";
import "./css/main.css";
import "./css/sideMenu.css";
import "./css/footer.css";
import "./css/lightswitch.css";
import "./css/landing.css";
import "./css/aboutMe.css";
import "./css/experiences.css";
import "./css/projects.css";
import "./css/contactMe.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
