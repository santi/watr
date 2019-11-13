import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./hamburger.css";

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <Link to="/" onClick={props.closeMenu}>
        Home
      </Link>
      <Link to="/settings" onClick={props.closeMenu}>
        Settings
      </Link>
      <div id="githubLogo">
        <a
          href="https://github.com/santi/watr"
          target="_blank"
          rel="noopener noreferrer"
          id="ghImg"
        >
          <img
            src="/github.png"
            alt=""
            style={{ width: "75%", height: "75%" }}
          />
        </a>
      </div>
    </Menu>
  );
};
