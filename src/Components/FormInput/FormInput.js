import React from "react";
import "./FormInput.css";

const FormInput = (props) => {
  return (
    <div className="form__input">
      <label>{props.labelValue}</label>
      <input
        name={props.name}
        placeholder={props.placeholder}
        type={props.type}
      />
    </div>
  );
};

export default FormInput;
