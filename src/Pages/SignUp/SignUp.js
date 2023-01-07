import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import FormInput from "../../Components/FormInput/FormInput";
import Button from "../../Components/Button/Button";
import Error from "../../Components/Error/Error";
import { errorActions } from "../../Store/Error-Slice";

const SignUp = () => {
  const showError = useSelector((state) => state.error.showError);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Show Error Handler
  const errorHandler = (showerror, errmsg) => {
    dispatch(errorActions.setErrorMsg(errmsg));
    dispatch(errorActions.setShowError(showerror));
  };

  //Validate Email and Password is not Empty
  const validateEmailPass = (email, pass, fullName) => {
    if (fullName === "") {
      errorHandler(true, "Full name is Required");
    } else if (email === "") {
      errorHandler(true, "Email is Required");
    } else if (pass === "") {
      errorHandler(true, "Password is Required");
    } else {
      errorHandler(false, "");
      return true;
    }
  };

  // Add user To Database collection
  const addUserToDatabaseCollection = async (userObj) => {
    await addDoc(collection(db, "users"), userObj).then(() => {
      navigate("/");
    });
  };

  //Authenticate and Post New User to Firebase
  const signUpHandler = async (email, password, fullName) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const userData = {
          id: user.uid,
          fullName,
          email: user.email,
          expenses: [],
          budgetName: "",
          budgetAmount: 0,
        };
        addUserToDatabaseCollection(userData);
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
    const fullName = e.target.fullname.value;
    if (validateEmailPass(email, password, fullName)) {
      signUpHandler(email, password, fullName);
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
            labelValue="Full Name"
            placeholder="eg. John Smith"
            name="fullname"
          />
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
          <Button btnValue="Sign Up" btnClass="btn btn-primary" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
