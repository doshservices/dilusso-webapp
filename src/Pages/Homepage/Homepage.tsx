import Blog from "./Components/Blog";
import Categories from "./Components/Categories";
import Hero from "./Components/Hero";
import NewArrivals from "./Components/NewArrivals";
import ShopTheLook from "./Components/ShopTheLook";


export default function Homepage() {
  return (
    <div className="  ">
      <Hero />
      <NewArrivals />
      <Categories />
      <ShopTheLook />
      <Blog />
    </div>
  )
}
