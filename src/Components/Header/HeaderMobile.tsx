import Logo from "./assets/Logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";

export default function HeaderMobile() {
  return (
    <div className=" bg-White fixed top-0 py-[4%] z-10 px-[5%] w-full  ">
      <section className="flex justify-between items-center">
        <div>
            <img src={Logo} className=" w-full" alt="Logo" />
        </div>
        <div className=" text-[1.7rem] ">
            <GiHamburgerMenu />
        </div>
      </section>
    </div>
  )
}
