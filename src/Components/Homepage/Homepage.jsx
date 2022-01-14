import React from "react";
import NavBar from "./NavBar/NavBar";
import Cover from "./Cover/Cover";
import "./Homepage.css";
import VideoBg from "./VideoBg";

export default function Homepage(props) {
  return (
    <div className="homepage" id="homepage">
      <div className="navBar">
        <NavBar
          navBarActive={props.navBarActive && "navBarActive "}
          darkBGColor={props.darkbg && "darkBGColor"}
        />
      </div>
      <VideoBg/>
      <Cover />
    </div>
  );
}