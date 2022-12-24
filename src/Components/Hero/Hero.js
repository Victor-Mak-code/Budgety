import Header from "../Header/Header";
import BudgetTrackUI from "../BudgetTrackUI/BudgetTrackUI";
import "./Hero.css";

const Hero = (props) => {
  return (
    <div className="hero">
      <Header />
      <BudgetTrackUI />
    </div>
  );
};

export default Hero;
