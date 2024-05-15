import React from "react";
import ReactDOM from "react-dom/client";
import Component from "./3.cas/komponenta.jsx";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Component />
    <Component />
    <Component />
    <Component />
  </React.StrictMode>
);
