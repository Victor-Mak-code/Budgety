import React from "react";
import "./GetStarted.css";
import { FaCoins, FaShareAlt } from "react-icons/fa";

const GetStarted = () => {
  return (
    <div className="getstarted__main">
      <div className="getstarted__box">
        <div className="getstarted__icon">
          <FaCoins className="icon__coin" />
          <h2>Manage your income today</h2>
        </div>
        <p> Budgety helps you stay active on your budget and plans </p>
      </div>

      <div className="getstarted__main-body">
        <div className="budget__btn create__budget">
          <span>Don't Have a Budget, Sign up</span>
        </div>

        <div className="budget__btn sign__in">
          <span>Already Have a Budget, Sign in</span>
        </div>
      </div>

      <div className="share__budgety">
        <FaShareAlt className="share__icon" />
        <span>Share Budgety with friends an Colleagues</span>
      </div>
    </div>
  );
};

export default GetStarted;
