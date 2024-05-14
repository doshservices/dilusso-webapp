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
    <div className="mt-[9rem] mx-[5%] flex items-center justify-between border-[#D9D9D9] border-[1px] bg-[#F3F3F3] py-[1.5%] px-[3%] ">
      <section className=" w-[40%]">
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
      <section className=" text-center gap-[2%] w-[55%] ">
        <h1 className=" text-[1.9rem] xxl:text-[2rem] font-semibold ">
          Just In: Baddest Collections from Ibiza
        </h1>
        <p className="text-[1rem] px-[10%] xxl:text-[1.1rem] mt-[1%]  ">
          Presenting your new wanderlust wardrobe – from archival scarf prints
          to nature-inspired accents
        </p>
        <h2 className=" font-medium text-[1.3rem] xxl:text-[1.4rem] mb-[4%] ">
          20% OFF
        </h2>
        <Button text="Shop Collection" link="/" />
      </section>
    </div>
  );
}
