import { useNavigate } from "react-router-dom";
import "./Header.css";
import Button from "../Button/Button";

const Header = (props) => {
  const navigate = useNavigate();

  const goToSignInHandler = () => {
    navigate("/signin");
  };
  const goToSignUpHandler = () => {
    navigate("/signup");
  };

  return (
    <div className="header">
      <div className="header__logo">
        <span>Budgety.</span>
      </div>

      <div className="header__btns">
        <Button
          btnClass="btn btn-text"
          btnValue="Sign in"
          btnAction={goToSignInHandler}
        />
        <Button
          btnClass="btn btn-white"
          btnValue="Sign up"
          btnAction={goToSignUpHandler}
        />
      </div>
    </div>
  );
};

export default Header;
