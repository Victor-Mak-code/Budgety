import React from "react";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  return (
    <div className="expense__list-box">
      <div className="expense_main-box">
        <div className="circle__div">
          <div className="inner__cirlce"></div>
        </div>

        <div className="expense__narration">
          <span className="narration">{props.narration}</span>
        </div>

        <div className="expense__amount">
          <span className="exp__price">{props.price}</span>
        </div>
      </div>

      <div className="expense__date">
        <span>{props.time}</span>
        <span className="date__span">{props.date}</span>
      </div>
    </div>
  );
};

export default ExpenseList;
