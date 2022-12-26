import React from "react";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import "./AddExpenseUI.css";

const AddExpenseUI = () => {
  return (
    <div className="add__expense-box">
      <h2>Create Expenses</h2>
      <p>Add your day to day spendings to get started</p>

      <div className="add__expense-form">
        <FormInput
          labelValue="Narration"
          placeholder="eg. Dell Laptop Purchase"
        />
        <FormInput labelValue="Amount" placeholder="100000" />
        <Button btnClass="btn btn-primary" btnValue="Add Expense" />
      </div>
    </div>
  );
};

export default AddExpenseUI;
