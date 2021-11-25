import React from "react";
import {NavLink, Outlet} from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav className="navigation">
        <NavLink to="/contacts">Contacts</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
