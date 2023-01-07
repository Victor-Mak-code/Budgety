import React from "react";
import { useSelector } from "react-redux";
import "./Error.css";

const Error = () => {
  const errorMsg = useSelector((state) => state.error.errorMsg);
  return (
    <div className="error-box">
      <span>{errorMsg}</span>
    </div>
  );
};

export default Error;
