import { useState } from "react";
import item1 from '../../assets/item1.png'
import item2 from '../../assets/item2.png'
import item3 from '../../assets/item3.png'

type Slide = {
    img: string;
};

const slides: Slide[] = [
    { img: item1 },
    { img: item2 },
    { img: item3 },
];

export const ItemDetails = () => {
    const [imgSrc, setImgSrc] = useState<string>(slides[0].img);
    const [imgIndex, setImgIndex] = useState<number>(0)

    const changeImgSlide = (index: number) => {
        if (index >= 0 && index < slides.length) {
            setImgSrc(slides[index].img);
        }
        setImgIndex(index);
    };

    return (
        <picture className="grid grid-cols-[120px_1fr] gap-4">
            <div>
                {slides.map((slide: any, index: number) =>
                    <figure
                        key={index}
                        onClick={() => changeImgSlide(index)}
                        className={imgIndex === index ? "px-4 outline-borderHash outline-1 outline mb-2" : "px-4 mb-2"}
                    >
                        <img className={imgIndex === index ? "h-[160px] w-[100px] object-cover py-4 w-full" : 'h-[160px] w-[100px] object-cover py-4 border-b-borderHash border-b-[1px] w-full'} src={slide.img} alt="" />
                    </figure>
                )}
            </div>
            <figure className="grow">
                <img className="w-full max-w-[360px] block mx-auto" src={imgSrc} alt='product' />
            </figure>
        </picture>
    )

}