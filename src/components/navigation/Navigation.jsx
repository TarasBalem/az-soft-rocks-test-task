import React from "react";
import "./navigation.scss";
import {NavLink, Outlet} from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav className="navigation">
        <NavLink to="/">Contacts</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
