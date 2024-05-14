// Import Swiper styles
import "swiper/css";
// import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Button2 from "../../../Components/Button/Button2";

export default function Blog() {
  const BlogBackground = [
    {
      id: 1,
      background: "blog",
    },
    {
      id: 2,
      background: "blog",
    },
    {
      id: 3,
      background: "blog",
    },
  ];
  return (
    <div>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={false}
        pagination={false}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        {BlogBackground.map((blog) => (
          <SwiperSlide>
            <div
              key={blog.id}
              className={`${blog.background} mx-[5%] my-[5%] pt-[15%] px-[3%] sm:px-[1.5%] pb-[1%] flex items-end `}
            >
              <section className=" text-White ">
                <small className=" font-medium text-[0.75rem] ssm:text-[0.8rem] sm:text-[0.85rem] ">
                  LATEST FASHION NEWS GOES HERE
                </small>
                <h3 className=" font-medium text-[1.2rem] ssm:text-[1.4rem] sm:text-[1.7rem] ">
                  Three Ways To Wear Tailoring, Casually
                </h3>
                <div className=" my-5">
                  <Button2 text="Read more" link="" style=" " />
                </div>
              </section>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
