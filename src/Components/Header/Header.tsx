import { Link } from "react-router-dom";
import Logo from "./assets/Logo.svg";
import { MdLanguage } from "react-icons/md";
import { MdOutlinePerson } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function Header() {
  return (
    <div className=" bg-[#F8F8F8] fixed top-0 w-full flex items-center justify-between z-10 py-[1%] px-[5%] ">
      <section className=" flex flex-1 gap-4 text-[0.9rem] font-medium ">
        <Link to="">Men’s Wear</Link>
        <Link to="">Women’s Wear</Link>
        <Link to="">Kid’s Wear</Link>
      </section>
      <section className=" flex flex-1 justify-center">
        <div>
          <img src={Logo} className=" w-full" alt="Logo Icon" />
        </div>
      </section>
      <section className="text-[1.3rem] flex flex-1 justify-end gap-4">
        <MdLanguage />
        <MdOutlinePerson />
        <MdFavoriteBorder />
        <MdOutlineShoppingCart />
      </section>
    </div>
  );
}
