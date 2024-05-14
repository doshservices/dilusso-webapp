// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../../../Components/Button/Button";
import Hero1 from "../assets/Hero1.png";
import Hero2 from "../assets/Hero2.png";
import Hero3 from "../assets/Hero3.png";

export default function Hero() {
  const HeroBackgound = [
    {
      id: 1,
      img: Hero1,
    },
    {
      id: 2,
      img: Hero2,
    },
    {
      id: 3,
      img: Hero3,
    },
  ];
  return (
    <div className="mt-[5rem] sm:mt-[7rem] lg:mt-[9rem] mx-[0%] sm:mx-[5%] flex flex-col-reverse gap-8 sm:gap-0 sm:flex-row items-center justify-between sm:border-[#D9D9D9] sm:border-[1px] bg-transparent border-none sm:border-solid sm:bg-[#F3F3F3] py-[1.5%] px-[0%] sm:px-[2%] md:px-[3%] ">
      <section className=" w-[100%] sm:w-[40%]">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={false}
          pagination={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Autoplay, Navigation, Pagination]}
          className="mySwiper"
        >
          {" "}
          {HeroBackgound.map((hero) => (
            <SwiperSlide>
              <div key={hero.id}>
                <img src={hero.img} className=" w-full" alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className=" text-center gap-[2%] px-[2%] sm:px-0 w-[100%] sm:w-[57%] md:w-[55%] ">
        <h1 className=" text-[1.5rem] ssm:text-[1.7rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem] leading-[110%] xl:text-[1.9rem] xxl:text-[2rem] font-semibold ">
          Just In: Baddest Collections from Ibiza
        </h1>
        <p className="text-[0.95rem] ssm:text-[1rem] sm:text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] px-[5%] sm:px-[10%] xxl:text-[1.1rem] my-[3%] sm:my-[1%]  ">
          Presenting your new wanderlust wardrobe – from archival scarf prints
          to nature-inspired accents
        </p>
        <h2 className=" font-medium text-[1.1rem] ssm:text-[1.2rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] xl:text-[1.3rem] xxl:text-[1.4rem] mb-[5%] ">
          20% OFF
        </h2>
        <Button text="Shop Collection" link="/" />
      </section>
    </div>
  );
}
