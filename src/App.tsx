import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import AboutUs from "./Pages/About";
import CheckOut from "./Pages/CheckOut";
import Faqs from "./Pages/Faq";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/faqs" element={<Faqs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
