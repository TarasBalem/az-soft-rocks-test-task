import React from "react";
import "./buttonRedirect.scss";
import {useNavigate} from "react-router-dom";

const ButttonRedirect = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <button onClick={goBack} className="btn-go-back">
      X
    </button>
  );
};

export default ButttonRedirect;
