import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import validateFormData from "../ValidateFormData/ValidateFormData";

const signUpHandler = async (email, password) => {
  if (validateFormData(email, password)) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  }
};

export { signUpHandler };
