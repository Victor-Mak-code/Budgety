import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import FormInput from "../../Components/FormInput/FormInput";
import Button from "../../Components/Button/Button";
import Error from "../../Components/Error/Error";
import { errorActions } from "../../Store/Error-Slice";

const SignUp = () => {
  const showError = useSelector((state) => state.error.showError);
  const dispatch = useDispatch();

  //Show Error Handler
  const errorHandler = (showerror, errmsg) => {
    dispatch(errorActions.setErrorMsg(errmsg));
    dispatch(errorActions.setShowError(showerror));
  };

  //Validate Email and Password is not Empty
  const validateEmailPass = (email, pass) => {
    if (email === "") {
      errorHandler(true, "Email is Required");
    } else if (pass === "") {
      errorHandler(true, "Password is Required");
    } else {
      errorHandler(false, "");
      return true;
    }
  };

  //Authenticate and Post New User to Firebase
  const signUpHandler = async (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.code;
        if (errorMessage === "auth/email-already-in-use") {
          errorHandler(true, "User Already Exists");
        } else if (errorMessage === "auth/invalid-email") {
          errorHandler(true, "invalid Email Address");
        } else {
          errorHandler(false, "");
        }
      });
  };

  //CreateNew User with Firebase
  const createUserHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (validateEmailPass(email, password)) {
      signUpHandler(email, password);
    }
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
          {showError ? <Error /> : null}

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
