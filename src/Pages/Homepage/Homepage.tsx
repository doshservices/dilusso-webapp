import Blog from "./Components/Blog";
// import Categories from "./Components/Categories";
import Hero from "./Components/Hero";
import NewArrivals from "./Components/NewArrivals";
import NewSeason from "./Components/NewSeason";
import ShopTheLook from "./Components/ShopTheLook";


export default function Homepage() {
  return (
    <div className="  ">
      <Hero />
      <NewArrivals />
      <NewSeason />
      {/* <Categories /> */}
      <ShopTheLook />
      <Blog />
    </div>
  )
}
