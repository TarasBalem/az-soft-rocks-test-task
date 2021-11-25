import React from "react";
import {Link} from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <Link to="/">Contacts</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Navigation;
