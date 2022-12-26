import React from "react";
import FormInput from "../../Components/FormInput/FormInput";
import Button from "../../Components/Button/Button";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="form__auth">
      <div className="form_auth__header">
        <div className="logo">
          <span>Budgety.</span>
        </div>
      </div>

      <div className="form__auth__body">
        <h2 className="heading__2">Sign in</h2>
        <p>Don't have an account, Sign up </p>
        <form>
          <FormInput
            labelValue="Email Address"
            placeholder="eg. johnsmith@gmail.com"
          />
          <FormInput labelValue="Password" placeholder="**********" />
          <Button btnValue="Sign in" btnClass="btn btn-primary" />
        </form>
      </div>
    </div>
  );
};

export default SignIn;
