import "./Header.css";
import Button from "../Button/Button";

const Header = (props) => {
  return (
    <div className="header">
      <div className="header__logo">
        <span>Budgety.</span>
      </div>

      <div className="header__btns">
        <Button btnClass="btn btn-text" btnValue="Sign in" />
        <Button btnClass="btn btn-white" btnValue="Sign up" />
      </div>
    </div>
  );
};

export default Header;
