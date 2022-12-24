import "./Button.css";
import React from "react";

const Button = (props) => {
  return (
    <button className={props.btnClass} onClick={props.btnAction}>
      {props.btnValue}
    </button>
  );
};

export default Button;
