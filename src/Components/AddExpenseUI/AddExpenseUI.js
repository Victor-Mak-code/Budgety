import React from "react";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import ExpenseList from "../ExpenseList/ExpenseList";
import "./AddExpenseUI.css";

const AddExpenseUI = () => {
  return (
    <div className="add__expense-box">
      <h2>Create Expenses</h2>
      <p>Add your day to day spendings to get started</p>

      <div className="expense__form-list-box">
        <div className="add__expense-form">
          <FormInput
            labelValue="Narration"
            placeholder="eg. Dell Laptop Purchase"
          />
          <FormInput labelValue="Amount" placeholder="100000" />
          <Button btnClass="btn btn-primary" btnValue="Add Expense" />
        </div>

        <div className="expense_box">
          <ExpenseList
            narration="Dell Laptop Purchase"
            price="NGN 500,000"
            time="9:00 pm"
            date="12th May 2022"
          />
          <ExpenseList
            narration="Anti Blue Light Glass"
            price="NGN 20,000"
            time="12:20 am"
            date="26th Dec 2022"
          />
          <ExpenseList
            narration="Gucci Pams for Male"
            price="NGN 400,0000"
            time="1:20 pm"
            date="30th Dec 2022"
          />
          <ExpenseList
            narration="Iphone 11 pro max"
            price="NGN 512,0000"
            time="2:00 pm"
            date="31th Dec 2022"
          />
        </div>
      </div>
    </div>
  );
};

export default AddExpenseUI;
