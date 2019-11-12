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
    </Menu>
  );
};
