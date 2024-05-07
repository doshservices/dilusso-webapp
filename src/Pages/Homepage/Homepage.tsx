import Blog from "./Components/Blog";
import Categories from "./Components/Categories";
import Hero from "./Components/Hero";
import NewArrivals from "./Components/NewArrivals";


export default function Homepage() {
  return (
    <div className="  ">
      <Hero />
      <NewArrivals />
      <Categories />
      <Blog />
    </div>
  )
}
