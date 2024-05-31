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

export default function ProductCards() {
    const [slidesPerView, setSlidesPerView] = useState(window.innerWidth < 640 ? 2 : 4);

    useEffect(() => {
        const handleResize = () => {
            setSlidesPerView(window.innerWidth < 640 ? 2 : 4);
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="py-[5%] ">
            <div className="">
                <section className="flex items-end gap-1  ">
                    <h2 className=" font-semibold text-[1.3rem] ssm:text-[1.5rem] sm:text-[1.7rem] md:text-[1.8rem] lg:text-[2.1rem] xxl:text-[2.2rem] ">
                        You May Also Like
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
                                    <button className="block w-fit ml-auto">
                                        <svg width="19" height="17" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.0303 19.0004L8.58027 17.7004C6.89694 16.1837 5.50527 14.8754 4.40527 13.7754C3.30527 12.6754 2.43027 11.6879 1.78027 10.8129C1.13027 9.93789 0.676107 9.13372 0.417773 8.40039C0.15944 7.66706 0.0302734 6.91706 0.0302734 6.15039C0.0302734 4.58372 0.555273 3.27539 1.60527 2.22539C2.65527 1.17539 3.96361 0.650391 5.53027 0.650391C6.39694 0.650391 7.22194 0.833724 8.00527 1.20039C8.78861 1.56706 9.46361 2.08372 10.0303 2.75039C10.5969 2.08372 11.2719 1.56706 12.0553 1.20039C12.8386 0.833724 13.6636 0.650391 14.5303 0.650391C16.0969 0.650391 17.4053 1.17539 18.4553 2.22539C19.5053 3.27539 20.0303 4.58372 20.0303 6.15039C20.0303 6.91706 19.9011 7.66706 19.6428 8.40039C19.3844 9.13372 18.9303 9.93789 18.2803 10.8129C17.6303 11.6879 16.7553 12.6754 15.6553 13.7754C14.5553 14.8754 13.1636 16.1837 11.4803 17.7004L10.0303 19.0004ZM10.0303 16.3004C11.6303 14.8671 12.9469 13.6379 13.9803 12.6129C15.0136 11.5879 15.8303 10.6962 16.4303 9.93789C17.0303 9.17956 17.4469 8.50456 17.6803 7.91289C17.9136 7.32122 18.0303 6.73372 18.0303 6.15039C18.0303 5.15039 17.6969 4.31706 17.0303 3.65039C16.3636 2.98372 15.5303 2.65039 14.5303 2.65039C13.7469 2.65039 13.0219 2.87122 12.3553 3.31289C11.6886 3.75456 11.2303 4.31706 10.9803 5.00039H9.08027C8.83027 4.31706 8.37194 3.75456 7.70527 3.31289C7.03861 2.87122 6.31361 2.65039 5.53027 2.65039C4.53027 2.65039 3.69694 2.98372 3.03027 3.65039C2.36361 4.31706 2.03027 5.15039 2.03027 6.15039C2.03027 6.73372 2.14694 7.32122 2.38027 7.91289C2.61361 8.50456 3.03027 9.17956 3.63027 9.93789C4.23027 10.6962 5.04694 11.5879 6.08027 12.6129C7.11361 13.6379 8.43027 14.8671 10.0303 16.3004Z" fill="#010101" />
                                        </svg>
                                    </button>
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
