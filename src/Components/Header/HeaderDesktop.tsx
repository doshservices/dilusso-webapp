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
import { useSelector } from "react-redux";

export default function HeaderDesktop() {
  const [showCart, setShowCart] = useState<boolean>(false);
  const [showAuth, setShowAuth] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const authenticatedUser = useSelector((state: any) => state.auth.user);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cartItems = useSelector((state: any) => state.cart.items)
  // console.log("user: ", authenticatedUser);

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
        {authenticatedUser ? (
          <section className="text-[1.3rem] flex  justify-end gap-4">
            <button>
              <MdOutlinePerson />
            </button>
            <Link to="/wishlist">
              <MdFavoriteBorder />
            </Link>
            <button
              className=" relative"
              onClick={() => setShowCart(!showCart)}
            >
              <MdOutlineShoppingCart />
              {cartItems?.length > 0 && (
                <small className=" absolute bg-black text-white text-[0.5rem] leading-none rounded-full flex justify-center items-center w-[0.75rem] h-[0.75rem] top-[-20%] right-0 ">
                {cartItems?.length}
              </small>
              )}
            </button>
            <div className=" cursor-pointer flex items-center">
              <MdLanguage />
              <MdOutlineKeyboardArrowDown className=" text-[1rem] " />
            </div>
          </section>
        ) : (
          <section className="text-[1.3rem] flex  justify-end gap-4">
            <button onClick={() => setShowAuth(!showAuth)}>
              <MdOutlinePerson />
            </button>
            <Link to="/wishlist">
              <MdFavoriteBorder />
            </Link>
            <button
              className=" relative"
              onClick={() => setShowCart(!showCart)}
            >
              <MdOutlineShoppingCart />
              {cartItems?.length > 0 && (
                <small className=" absolute bg-black text-white text-[0.5rem] leading-none rounded-full flex justify-center items-center w-[0.75rem] h-[0.75rem] top-[-20%] right-0 ">
                {cartItems?.length}
              </small>
              )}
            </button>
            <div className=" cursor-pointer flex items-center">
              <MdLanguage />
              <MdOutlineKeyboardArrowDown className=" text-[1rem] " />
            </div>
          </section>
        )}
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
