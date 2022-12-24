import Hero from "../../Components/Hero/Hero";
import AddExpenseUI from "../../Components/AddExpenseUI/AddExpenseUI";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <AddExpenseUI />
    </div>
  );
};

export default Home;
