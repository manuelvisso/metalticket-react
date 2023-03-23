import React from "react";
import Navbar from "../Navbar/Navbar";
import "../Header/Header.scss";
import logo from "../../assets/logo/logo-no-bg.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="Logo" className="header__logo__img" />
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
