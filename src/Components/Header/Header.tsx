import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

export default function Header() {
  return (
    <header>
      <div className="hidden sm:block ">
        <HeaderDesktop />
      </div>
      <div className="block sm:hidden ">
        <HeaderMobile />
      </div>
    </header>
  );
}
