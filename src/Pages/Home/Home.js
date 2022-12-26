import Hero from "../../Components/Hero/Hero";
import AddExpenseUI from "../../Components/AddExpenseUI/AddExpenseUI";
import Modal from "../../Components/Modal/Modal";
import GetStarted from "../../Components/GetStarted/GetStarted";

const Home = () => {
  return (
    <div className="home">
      <Modal>
        <GetStarted />
      </Modal>
      <Hero />
      <AddExpenseUI />
    </div>
  );
};

export default Home;
