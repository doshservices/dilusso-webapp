import Women from "../../Homepage/assets/Women.svg";
import Men from "../../Homepage/assets/Men.svg";
import Kid from "../../Homepage/assets/Kid.svg";
import { useState } from "react";

export default function Categories() {
  const CategoryBody = [
    {
      id: 1,
      image: Women,
    },
    {
      id: 2,
      image: Kid,
    },
    {
      id: 3,
      image: Men,
    },
  ];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="px-[5%] py-[1%] ">
      <hr className=" my-3 border-opacity-20 border-Black border-[1px] " />
      <h2 className=" font-semibold text-[1.35rem] text-center  ">
        CATEGORIES
      </h2>

      <div className=" flex gap-[2%] mt-4 ">
        {CategoryBody.map((category, index) => {
          const isHovered = index === hoveredIndex;
          return (
            <section
              key={category.id}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className=" flex-1"
            >
              <img
                src={category.image}
                className=" w-full "
                alt="Women Wears"
              />
              <div
                className={`absolute flex flex-col items-center font-Montserrat justify-center bg-Secondary bg-opacity-80 bottom-0 right-0 top-0 left-0 bg-white p-4 w-full shadow-md transition-opacity duration-1000 ${
                  isHovered ? "opacity-100 " : "opacity-0"
                }`}
              >
                <p className="text-[0.8rem] ssm:text-[0.8rem] sm:text-[0.7rem] font-semibold">
                  coded
                </p>
                <h1 className="text-[1.2rem] ssm:text-[1.6rem] sm:text-[1.1rem] md:text-[1.6rem]  lg:text-[1.4rem] xl:text-[1.6rem] font-bold tracking-[5px] mt-1">
                  Good
                </h1>
                <p className="text-[0.8rem] ssm:text-[0.8rem] sm:text-[0.7rem] sm:px-[10%] px-[5%] lg:px-[15%] text-center font-medium mt-2 lg:mt-4">
                  Nicee
                </p>
                {/* <Link to={portfolio.link} target="_blank" className="">
                  <Button text="LIVE SITE" />
                </Link> */}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
