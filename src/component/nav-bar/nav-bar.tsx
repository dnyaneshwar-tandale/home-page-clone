/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../../assets/x.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./nav-bar.scss";
import { NavLink } from "react-router-dom";
import Button from "../button/button";
import { BUTTON_STATES } from "../../constants/button";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <NavLink onClick={closeMobileMenu} className="logo nav-text" to="">
            <Logo className="logo" />
          </NavLink>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <NavLink onClick={closeMobileMenu} className="nav-text" to="/feature">
            Feature
          </NavLink>
          <NavLink onClick={closeMobileMenu} className="nav-text" to="/pricing">
            Pricing
          </NavLink>
          <NavLink
            onClick={closeMobileMenu}
            className="nav-text"
            to="/download"
          >
            Download
          </NavLink>
          <NavLink onClick={closeMobileMenu} className="nav-text" to="/company">
            Company
          </NavLink>
          <NavLink onClick={closeMobileMenu} className="nav-text" to="/support">
            Support
          </NavLink>
        </ul>
      </div>
      <ul className="signin-up">
        <NavLink className="nav-text" onClick={closeMobileMenu} to="/login">
          Login
        </NavLink>
        <NavLink className="nav-text" onClick={closeMobileMenu} to="/sign-up">
          <Button buttonSize="" buttonStyle={BUTTON_STATES.btnOutline}>
            SIGN-UP
          </Button>
        </NavLink>
      </ul>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <div className="sign-up-block">
            <NavLink
              className="nav-text"
              onClick={closeMobileMenu}
              to="/sign-up"
            >
              <Button buttonSize="" buttonStyle={BUTTON_STATES.btnOutline}>
                SIGN-UP
              </Button>
            </NavLink>
            <MenuIcon className="menu-icon" />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
