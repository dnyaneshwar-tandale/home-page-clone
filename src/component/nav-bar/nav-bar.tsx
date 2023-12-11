/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../../assets/x.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./nav-bar.scss";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <NavLink className="logo" to="">
            <Logo className="logo" />
          </NavLink>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <NavLink to="/feature">Feature</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/download">Download</NavLink>
          <NavLink to="/company">Company</NavLink>
          <NavLink to="/support">Support</NavLink>
     
        </ul>
      </div>
      <ul className="signin-up">
      
        <NavLink onClick={closeMobileMenu} to="/login">
         Login
        </NavLink>
        <NavLink onClick={closeMobileMenu} to="/sign-up">
          <div className="signup-btn">SIGN-UP</div>
        </NavLink>
      </ul>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default NavBar;
