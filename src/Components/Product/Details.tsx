/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";



interface ImageState {
    images: string[]
}

// const slides: ImageState = [
//     'https://res.cloudinary.com/neutrinookoye/image/upload/v1706037339/tkqqrq7jkvastph7d2nb.png',
//     'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR3wOeWUjZyY6giBrCj74fMmNtBWi-QeZgGuBie0RKv1yPTZ1mF__PVkwikj5PcZFrewuZL0vNwY5EBrYnH8_aDAWyDK770ghRNaMevWiNfwDgiQFLvqRbOuA&usqp=CAc',
//     'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcStmk1NZGAtFssdPXQa2uhH9us4wyElFo_yXz1LOJd7UzsHBt5nQvBSTsLBGeCJHd2YCu98oKddA-emPeCX88qQmOU7EeAdyFUNd3_27IDI0s5Wz_q4c_AzfQ&usqp=CAc',
// ];

export const ItemDetails = ({images}: ImageState) => {
    const [imgSrc, setImgSrc] = useState<string>(images[0]);
    const [imgIndex, setImgIndex] = useState<number>(0)

    console.log("image list: ", images);
    

    const changeImgSlide = (index: number) => {
        if (index >= 0 && index < images.length) {
            setImgSrc(images[index]);
        }
        setImgIndex(index);
    };

    return (
        <picture className="grid grid-cols-[120px_1fr] gap-4">
            <div>
                {images.map((slide: any, index: number) =>
                    <figure
                        key={index}
                        onClick={() => changeImgSlide(index)}
                        className={imgIndex === index ? "px-4 outline-borderHash outline-1 outline mb-2" : "px-4 mb-2"}
                    >
                        <img className={imgIndex === index ? "h-[160px]  object-contain py-4 w-full" : 'h-[160px]  object-contain py-4 border-b-borderHash border-b-[1px] w-full'} src={slide} alt="" />
                    </figure>
                )}
            </div>
            <figure className="grow">
                <img className="w-full max-w-[360px] block mx-auto" src={imgSrc} alt='product' />
            </figure>
        </picture>
    )

}