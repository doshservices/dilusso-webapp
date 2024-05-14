import Shop from "../assets/Shop.png";
import Shop1 from "../assets/Shop1.png";
import Shop2 from "../assets/Shop2.png";
import Shop3 from "../assets/Shop3.png";
import Shop4 from "../assets/Shop4.png";

const ShopItems = [
  {
    id: 1,
    img: Shop1,
    itemName: "FENDI",
    description: "Fendi black/brown sneakers",
    price: "234,000",
  },
  {
    id: 2,
    img: Shop2,
    itemName: "FENDI",
    description: "Fendi black/brown sneakers",
    price: "234,000",
  },
  {
    id: 3,
    img: Shop3,
    itemName: "FENDI",
    description: "Fendi black/brown sneakers",
    price: "234,000",
  },
  {
    id: 4,
    img: Shop4,
    itemName: "FENDI",
    description: "Fendi black/brown sneakers",
    price: "234,000",
  },
];

export default function ShopTheLook() {
  return (
    <div className=" pt-[5%] px-[5%] ">
      <h1 className=" font-semibold text-[1.2rem] text-center ">
        SHOP THE LOOK
      </h1>
      <section className=" mt-[2%] flex justify-between">
        <div className="hidden sm:block w-[37%] lg:w-[35%] ">
          <img src={Shop} className=" w-full " alt="" />
        </div>
        <div className="w-[100%] sm:w-[62%] flex gap-y-2 lg:gap-y-4 justify-between flex-wrap ">
          {ShopItems.map((shop) => (
            <section
              key={shop.id}
              className="w-[49%] flex items-center bg-[#F6F6F6] pb-[2%] sm:pb-0 px-[1%]  "
            >
              <div>
                <div className=" w-[45%] sm:w-[40%] md:w-[50%] h-[8rem] ssm:h-[12rem] sm:h-[8rem] md:h-[10rem] lg:h-[12rem] xl:h-[15rem] flex items-center mx-auto ">
                  <img src={shop.img} className=" w-full" alt="" />
                </div>
                <div className="mt-[5%] text-center flex flex-col gap-1 lg:gap-2 ">
                  <h3 className=" text-[0.9rem] ssm:text-[0.95rem] xxl:text-[1rem] font-medium ">
                    {shop.itemName}
                  </h3>
                  <p className="text-[0.8rem] ssm:text-[0.85rem] xxl:text-[0.9rem]  ">
                    {shop.description}
                  </p>
                  <h4 className=" text-[0.9rem] ssm:text-[0.95rem] xxl:text-[1rem] font-medium ">
                    N{shop.price}
                  </h4>
                </div>
              </div>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}
