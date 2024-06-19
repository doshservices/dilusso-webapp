import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import AboutUs from "./Pages/About";
import CheckOut from "./Pages/CheckOut";
import Faqs from "./Pages/Faq";
import Category from "./Pages/Category";
import ProductDetails from "./Pages/ProductDetails";
import './App.css'
import Wishlist from "./Pages/Wishlist/Wishlist";
import EditPasswordAddress from "./Pages/Edit/EditPasswordAddress";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/category" element={<Category />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/editPasswordAddress" element={<EditPasswordAddress />} />
        <Route path="/product/details/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
