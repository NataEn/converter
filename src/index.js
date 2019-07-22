import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-social/bootstrap-social.css";
import "popper.js/dist/popper.min.js";
import "./index.css";
import App from "./App";
import "flag-icon-css/css/flag-icon.min.css";
import * as serviceWorker from "./serviceWorker";

//import * as i18n from "bootstrap-select/dist/js/i18n";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
