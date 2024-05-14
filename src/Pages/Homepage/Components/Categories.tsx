import Women from "../../Homepage/assets/Women.svg";
import Kid from "../../Homepage/assets/Kid.svg";
import Button from "../../../Components/Button/Button";
import { useState } from "react";
import Button2 from "../../../Components/Button/Button2";

export default function Categories() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredKid, setIsHoveredKid] = useState(false);

  return (
    <div className="px-[5%]  ">
      <div className=" flex flex-col gap-y-4 sm:gap-y-0 sm:flex-row gap-[2%] items-center mt-4 ">
      <section
          onMouseEnter={() => setIsHoveredKid(true)}
          onMouseLeave={() => setIsHoveredKid(false)}
          className="relative w-full flex-1"
        >
          <img src={Kid} className="w-full" alt="Women Wears" />
          <div
            className={`absolute text-White gap-4 flex flex-col shadow-md items-center font-raleway justify-center bg-opacity-80 bottom-0 right-0 top-0 left-0 bg-Black w-full transition-opacity duration-1000 ${
              isHoveredKid ? "opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="font-semibold text-[2rem] ssm:text-[2.2rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2.2rem]">KID'S WEAR</h2>
            <Button2 text="Shop for Kids" link="" style="bg-White text-black" />
          </div>
        </section>
        <section className=" flex flex-col items-center py-[5%] sm:py-0 w-full flex-1">
          <h2 className=" font-medium text-[1.8rem] sm:text-[1.4rem] md:text-[1.6rem] leading-[120%] lg:text-[1.9rem] text-center px-[5%] lg:px-[10%] ">
            The New Season is Here
          </h2>
          <div className=" mt-[5%] sm:mt-[8%] md:mt-[7%] ">
            <Button text="Shop collections" link="" />
          </div>
        </section>
        <section
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-full flex-1"
        >
          <img src={Women} className="w-full" alt="Women Wears" />
          <div
            className={`absolute text-White gap-4 flex flex-col shadow-md items-center font-raleway justify-center bg-opacity-80 bottom-0 right-0 top-0 left-0 bg-Black w-full transition-opacity duration-1000 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="font-semibold text-[2rem] ssm:text-[2.2rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2.2rem]">KID'S WEAR</h2>
            <Button2 text="Shop for Women" link="" style="bg-White text-black" />
          </div>
        </section>
      </div>
    </div>
  );
}
