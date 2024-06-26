import { Link, NavLink } from "react-router-dom";
import Logo from "./assets/Logo.svg";
import {
  MdOutlineShoppingCart,
  MdLanguage,
  MdFavoriteBorder,
  MdOutlinePerson,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { CartItems } from "../Cart/Cart";
import Auth from "../auth/Auth";

export default function HeaderDesktop() {
  const [showCart, setShowCart] = useState<boolean>(false);
  const [showAuth, setShowAuth] = useState<boolean>(false);

  useEffect(() => {
    if (showCart || showAuth === true) {
      document.body.style.overflow = "hidden";
    }
    return (): void => {
      document.body.style.overflow = "unset";
    };
  }, [showCart, showAuth]);

  return (
    <header className="bg-White fixed top-0 w-full z-10 py-[1.5%] px-[5%]">
      <div className="flex items-center justify-between  ">
        <section className=" flex  gap-2 lg:gap-4 text-[0.8rem] lg:text-[0.9rem] font-medium ">
          <Link to="">Men’s Wear</Link>
          <Link to="">Women’s Wear</Link>
        </section>
        <section className=" flex  justify-centr">
          <div className=" w-[80%] lg:w-auto ">
            <img src={Logo} className=" w-full" alt="Logo Icon" />
          </div>
        </section>
        <section className="text-[1.3rem] flex  justify-end gap-4">
          <button onClick={() => setShowAuth(!showAuth)}>
            <MdOutlinePerson />
          </button>
          <Link to="/wishlist">
            <MdFavoriteBorder />
          </Link>
          <button onClick={() => setShowCart(!showCart)}>
            <MdOutlineShoppingCart />
          </button>
          <div className=" cursor-pointer flex items-center">
            <MdLanguage />
            <MdOutlineKeyboardArrowDown className=" text-[1rem] " />
          </div>
        </section>
      </div>

      <div className=" flex justify-between pt-[4%]">
        <section className=" flex w-[85%] lg:w-[80%] justify-between text-[0.8rem] lg:text-[0.9rem] font-medium ">
          <NavLink
            className=" hover:border-black border-b-2 border-transparent border-solid rounded-md px-1 pb-1 "
            to=""
          >
            20% off{" "}
          </NavLink>
          <NavLink
            className="  hover:border-black border-b-2 border-transparent border-solid rounded-md px-1 pb-1 "
            to=""
          >
            New Arrivals{" "}
          </NavLink>
          <NavLink
            className="  hover:border-black border-b-2 border-transparent border-solid rounded-md px-1 pb-1 "
            to=""
          >
            Brands{" "}
          </NavLink>
          <NavLink
            className="  hover:border-black border-b-2 border-transparent border-solid rounded-md px-1 pb-1 "
            to=""
          >
            Clothing{" "}
          </NavLink>
          <NavLink
            className="  hover:border-black border-b-2 border-transparent border-solid rounded-md px-1 pb-1 "
            to=""
          >
            Shoes{" "}
          </NavLink>
          <NavLink
            className="  hover:border-black border-b-2 border-transparent border-solid rounded-md px-1 pb-1 "
            to=""
          >
            Bags{" "}
          </NavLink>
          <NavLink
            className="  hover:border-black border-b-2 border-transparent border-solid rounded-md px-1 pb-1 "
            to=""
          >
            Speakers{" "}
          </NavLink>
          <NavLink
            className="  hover:border-black border-b-2 border-transparent border-solid rounded-md px-1 pb-1 "
            to=""
          >
            Accessories{" "}
          </NavLink>
          <NavLink
            className="  hover:border-black border-b-2 border-transparent border-solid rounded-md px-1 pb-1 text-red-500 "
            to=""
          >
            Sales{" "}
          </NavLink>
        </section>
        <section className=" flex justify-center w-[15%] ">
          <IoSearchOutline className=" text-[1.3rem] " />
        </section>
      </div>
      {showCart ? <CartItems close={() => setShowCart(!showCart)} /> : null}
      {showAuth ? <Auth close={() => setShowAuth(!showAuth)} /> : null}
    </header>
  );
}
