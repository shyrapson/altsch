import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Errorbound from "./components/Errorbound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Errorbound>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode >
  </Errorbound>
);
