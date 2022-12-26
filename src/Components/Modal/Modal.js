import React from "react";
import "./Modal.css";

const Modal = (props) => {
  return (
    <div className="modal__box">
      <div className="modal__content">{props.children}</div>
    </div>
  );
};

export default Modal;
