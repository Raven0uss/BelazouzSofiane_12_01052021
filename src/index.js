import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import Header from "./layout/Header";
import SideBar from "./layout/SideBar";
import Profile from "./Profile";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <SideBar />

    <div id="app-content">
      <Profile />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
