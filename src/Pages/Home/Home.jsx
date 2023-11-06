import SectionHeader from "../../components/SectionHeader";
import Subscribe from "../../components/Subscribe";
import Banner from "./Banner";
import Icecream from "./Icecream";
import OurBurger from "./OurBurger";
import Popular from "./Popular";
import Presentation from "./Presentation";
import Yourway from "./Yourway";

const Home = () => {
  const sectionTitle = {
    name: "Most Popular Items",
  };
  return (
    <div>
      <Banner></Banner>
      <OurBurger></OurBurger>
      <div>
        <SectionHeader props={sectionTitle}></SectionHeader>
        <div className="flex flex-col justify-center items-center">
          <Popular></Popular>
        </div>
      </div>
      <div>
        <Presentation></Presentation>
      </div>
      <div>
        <Icecream></Icecream>
      </div>
      <div className=" pt-20">
        <Yourway></Yourway>
      </div>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
