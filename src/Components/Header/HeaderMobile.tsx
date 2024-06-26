import { useEffect, useState } from "react";
import Logo from "./assets/Logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import {
  MdOutlineShoppingCart,
  MdLanguage,
  MdFavoriteBorder,
  MdOutlinePerson,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { CartItems } from "../Cart/Cart";
import Auth from "../auth/Auth";

export default function HeaderMobile() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  };

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
    <div className=" bg-White fixed top-0 py-[4%] z-10 px-[5%] w-full  ">
      <section className="flex justify-between items-center">
        <div>
            <img src={Logo} className=" w-full" alt="Logo" />
        </div>
        <div onClick={toggleMenu} className=" text-[1.7rem] ">
            {showMenu ? (
              <IoClose />
            ) : (
              <GiHamburgerMenu />
            )}
        </div>
      </section>

      {showMenu && (
        <div className=" absolute w-[50%] right-0 h-[100vh] bg-white overflow-y-hidden px-[5%] top-full">
          <section className="text-[1.3rem] flex pb-[10%] gap-4">
          <button onClick={() => {setShowAuth(!showAuth); toggleMenu}}>
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
          <section className=" flex flex-col mt-[5%]  gap-4 text-[0.9rem] font-medium ">
          <Link onClick={toggleMenu} to="/about">About</Link>
          <Link onClick={toggleMenu} to="">Men’s Wear</Link>
          <Link onClick={toggleMenu} to="">Women’s Wear</Link>
          <Link onClick={toggleMenu} to="/faqs">FAQS</Link>
        </section>

        {showCart ? <CartItems close={() => setShowCart(!showCart)} /> : null}
      {showAuth ? <Auth close={() => setShowAuth(!showAuth)} /> : null}
        </div>
      )}
    </div>
  )
}
