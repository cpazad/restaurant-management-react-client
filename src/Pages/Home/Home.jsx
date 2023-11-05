import SectionHeader from "../../components/SectionHeader"
import Subscribe from "../../components/Subscribe"
import Banner from "./Banner"
import OurBurger from "./OurBurger"
import Popular from "./Popular"


const Home = () => {
  
   const sectionTitle = {
        name : "Most Popular Items"
    }
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
      <Subscribe></Subscribe>
    </div>
  )
}

export default Home