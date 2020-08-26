import React from "react";
import logo from "../src/img/Logo.jfif";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" height="50" width="70" />
        <h1> Naeem Keep </h1>
      </div>
    </>
  );
};

export default Header;
