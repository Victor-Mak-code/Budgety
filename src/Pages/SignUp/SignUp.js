import React from "react";
import FormInput from "../../Components/FormInput/FormInput";
import Button from "../../Components/Button/Button";
import { signUpHandler } from "../../ActionHandlers/SignupHandler/SignupHandler";

const SignUp = () => {
  const createUserHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signUpHandler(email, password);
  };

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
        <form onSubmit={createUserHandler}>
          <FormInput
            labelValue="Email Address"
            placeholder="eg. johnsmith@gmail.com"
            name="email"
          />
          <FormInput
            labelValue="Password"
            placeholder="**********"
            name="password"
          />
          <Button btnValue="Sign Up" btnClass="btn btn-primary" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
