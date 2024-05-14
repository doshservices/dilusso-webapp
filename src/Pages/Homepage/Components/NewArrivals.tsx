// import Button from "../../../Components/Button/Button";
import { useEffect, useState } from "react";
import New1 from "../assets/New1.png";
import New2 from "../assets/New2.png";
import New3 from "../assets/New3.png";
import New4 from "../assets/New4.png";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const New = [
  {
    id: 1,
    img: New1,
    itemName: "AMI PARIS",
    description: "Ami paris sweater",
    price: "717,575",
  },
  {
    id: 2,
    img: New2,
    itemName: "AMI PARIS",
    description: "Ami paris sweater",
    price: "717,575",
  },
  {
    id: 3,
    img: New3,
    itemName: "AMI PARIS",
    description: "Ami paris sweater",
    price: "717,575",
  },
  {
    id: 4,
    img: New4,
    itemName: "AMI PARIS",
    description: "Ami paris sweater",
    price: "717,575",
  },
  {
    id: 5,
    img: New1,
    itemName: "AMI PARIS",
    description: "Ami paris sweater",
    price: "717,575",
  },
  {
    id: 6,
    img: New2,
    itemName: "AMI PARIS",
    description: "Ami paris sweater",
    price: "717,575",
  },
  {
    id: 7,
    img: New3,
    itemName: "AMI PARIS",
    description: "Ami paris sweater",
    price: "717,575",
  },
  {
    id: 8,
    img: New4,
    itemName: "AMI PARIS",
    description: "Ami paris sweater",
    price: "717,575",
  },
];



export default function NewArrivals() {
  const [slidesPerView, setSlidesPerView] = useState(window.innerWidth < 640 ? 2 : 4);

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth < 640 ? 2 : 4);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="px-[5%] py-[5%] ">
      <div className="">
        <section className="flex items-end gap-1  ">
          <h2 className=" font-semibold text-[1.3rem] ssm:text-[1.5rem] sm:text-[1.7rem] md:text-[1.8rem] lg:text-[2.1rem] xxl:text-[2.2rem] ">
            NEW ARRIVALS
          </h2>
          <hr className=" my-3 w-[7%] border-red-500 border-[3px] " />
        </section>

        <section className=" mt-[1%] ">
          <Swiper
            spaceBetween={0}
            slidesPerView={slidesPerView}
            navigation={true}
            pagination={false}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation, Pagination]}
            className="mySwiper"
            
          >
            {New.map((cloth) => (
              <SwiperSlide>
                <div key={cloth.id} className="px-[10%] ">
                  <div>
                    <img src={cloth.img} className="w-full " alt="" />
                  </div>
                  <div className=" flex flex-col mt-[5%] gap-1 lg:gap-2 items-center ">
                    <h2 className=" font-medium text-[1rem] lg:text-[1.1rem] ">
                      {cloth.itemName}
                    </h2>
                    <p className=" text-[0.9rem] lg:text-[1rem] ">{cloth.description}</p>
                    <h4 className="font-medium text-[1rem] lg:text-[1.1rem]">
                      N{cloth.price}
                    </h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    </div>
  );
}
