// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../../../Components/Button/Button";

export default function Hero() {
  const HeroBackgound = [
    {
      id: 1,
      background: "hero-1",
    },
    {
      id: 2,
      background: "hero-2",
    },
    {
      id: 3,
      background: "hero-3",
    },
    {
      id: 4,
      background: "hero-4",
    },
  ]
  return (
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
       <div key={hero.id} className={`h-[90vh] px-[3%] pb-[3%] mt-[10vh] flex font-medium text-White items-end ${hero.background} `}>
         <section className="  gap-[2%] w-[40%] ">
           <h1 className=" text-[1.5rem] xxl:text-[1.6rem] font-semibold ">
             Just In: Baddest Collections from Ibiza
           </h1>
           <p className="text-[0.85rem] xxl:text-[0.9rem] mt-[2%] mb-[7%] ">
             Presenting your new wanderlust wardrobe – from archival scarf
             prints to nature-inspired accents
           </p>
           <Button text="Shop Collection" link="/" />
         </section>
       </div>
     </SwiperSlide>
     ))}
      
    </Swiper>
  );
}
