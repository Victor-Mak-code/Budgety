import React from "react";
import FormInput from "../../Components/FormInput/FormInput";
import Button from "../../Components/Button/Button";

const SignUp = () => {
  return (
    <div className="form__auth">
      <div className="form_auth__header">
        <div className="logo">
          <span>Budgety.</span>
        </div>
      </div>

      <div className="form__auth__body">
        <h2 className="heading__2">Sign Up</h2>
        <p>Aleady have an account, Sign In </p>
        <form>
          <FormInput
            labelValue="Email Address"
            placeholder="eg. johnsmith@gmail.com"
          />
          <FormInput labelValue="Username" placeholder="eg. johnsmith10" />
          <FormInput labelValue="Password" placeholder="**********" />
          <Button btnValue="Sign Up" btnClass="btn btn-primary" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
