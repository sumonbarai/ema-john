import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-area">
      <div className="main-menu container">
        <div className="logo-area">
          <img src={logo} alt="" />
        </div>
        <div className="menu-area">
          <a href="/Home">Home</a>
          <a href="/service">service</a>
          <a href="/blog">blog</a>
          <a href="/about">about</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
