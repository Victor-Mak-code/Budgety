import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import FormInput from "../../Components/FormInput/FormInput";
import Button from "../../Components/Button/Button";
import Error from "../../Components/Error/Error";
import Preloader from "../../Components/Preloader/Preloader";
import { preloaderActions } from "../../Store/Preloader-Slice";
import { errorActions } from "../../Store/Error-Slice";

import "./SignIn.css";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showError = useSelector((state) => state.error.showError);
  const showLoader = useSelector((state) => state.preloader.showLoader);

  const errorHandler = (showerr, errmsg) => {
    dispatch(errorActions.setErrorMsg(errmsg));
    dispatch(errorActions.setShowError(showerr));
  };

  const SignInAuthHandler = (email, password) => {
    dispatch(preloaderActions.setShowLoader(true));
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/");
        localStorage.setItem("isAuth", true);
        dispatch(preloaderActions.setShowLoader(false));
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/user-not-found") {
          dispatch(preloaderActions.setShowLoader(false));
          errorHandler(true, "User does not exit");
        } else if (errorCode === "auth/invalid-email") {
          dispatch(preloaderActions.setShowLoader(false));
          errorHandler(true, "Invalid Email Address");
        } else if (errorCode === "auth/wrong-password") {
          dispatch(preloaderActions.setShowLoader(false));
          errorHandler(true, "Invalid Password");
        } else {
          dispatch(preloaderActions.setShowLoader(false));
          errorHandler(false, "");
        }
      });
  };

  const signInHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (email === "") {
      errorHandler(true, "Email is Required");
    } else if (password === "") {
      errorHandler(true, "Password is Required");
    } else {
      errorHandler(false, "");
      SignInAuthHandler(email, password);
    }
  };

  return (
    <div className="form__auth">
      {showLoader ? <Preloader /> : null}
      <div className="form_auth__header">
        <div className="logo">
          <span>Budgety.</span>
        </div>
      </div>

      <div className="form__auth__body">
        <h2 className="heading__2">Sign in</h2>
        <p>Don't have an account, Sign up </p>
        <form onSubmit={signInHandler}>
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
            type="password"
          />
          <Button btnValue="Sign in" btnClass="btn btn-primary" />
        </form>
      </div>
    </div>
  );
};

export default SignIn;
