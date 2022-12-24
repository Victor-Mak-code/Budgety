import React from "react";
import { FaCoins } from "react-icons/fa";
import { MdRemoveCircle } from "react-icons/md";
import "./BudgetTrackUI.css";

const BudgetTrackUI = () => {
  return (
    <div className="budget__trakerUI">
      <div className="budget__tracker">
        <div className="budget__box budget__amount">
          <div className="budget_icon-box">
            <FaCoins className="budget-icon budget__amt-icon" />
            <span className="span__expense">Bugdet Amount</span>
          </div>
          <span className="span__price">NGN 200,000</span>
        </div>

        <div className="budget__box budget__expense">
          <div className="budget_icon-box">
            <MdRemoveCircle className="budget-icon budget__balance-icon" />
            <span className="span__total">Available Balance</span>
          </div>
          <span className="span__price">NGN 150,000</span>
        </div>

        <div className="budget__box budget__expense">
          <div className="budget_icon-box">
            <MdRemoveCircle className="budget-icon budget__score-icon" />
            <span className="span__total">Budget Score</span>
          </div>
          <span className="span__price">30% Spent</span>
        </div>

        <div className="budget__box budget__expense">
          <div className="budget_icon-box">
            <MdRemoveCircle className="budget-icon budget__exp-icon" />
            <span className="span__total">Total Expenses</span>
          </div>
          <span className="span__price">NGN 150,000</span>
        </div>
      </div>
    </div>
  );
};

export default BudgetTrackUI;
