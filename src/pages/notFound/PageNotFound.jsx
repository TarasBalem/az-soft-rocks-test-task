import React from "react";
import "./notFound.scss";
import {Link} from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="not-found">
      <h2>Page Not Found</h2>
      <p>
        <Link to="/">Go to home page</Link>
      </p>
    </div>
  );
};

export default PageNotFound;
