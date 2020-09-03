import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="menu_style">
        <NavLink exact activeClassName="active_class" to="/">
          About Us
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/services">
          Services
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/user">
          User
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/contact">
          Contact Us
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
