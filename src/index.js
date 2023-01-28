import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./store/store";
import { Provider } from "react-redux";
import "./css/main.css";
import "./css/sideMenu.css";
import "./css/footer.css";
import "./css/lightswitch.css";
import "./css/pages.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
