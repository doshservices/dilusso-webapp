import pic from "./assets/pic.png";
import { IoClose } from "react-icons/io5";

const wishlistData = [
  {
    id: 1,
    name: "Balmain",
  },
  {
    id: 2,
    name: "Balmain",
  },
];

export default function Wishlist() {
  return (
    <div className="mt-[5rem] sm:mt-[7rem] lg:mt-[9rem] px-[5%] mb-2 ">
      <section className="flex items-end gap-1 border-b-[2px] ">
        <h2 className=" font-semibold text-[1.3rem] ssm:text-[1.5rem] sm:text-[1.7rem] md:text-[1.8rem] lg:text-[2.1rem] xxl:text-[2.2rem] ">
          WISHLIST
        </h2>
        <hr className=" my-3 w-[7%] border-red-500 border-[3px] " />
      </section>
      <section className=" font-medium text-[0.9rem] mt-1 ">
        <p>2 LIST</p>
      </section>

      {/* wishlist items */}
      <section className="py-[5%] flex flex-col gap-10 ">
        {wishlistData.map((wish) => (
          <div
            key={wish.id}
            className="w-[100%] sm:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto flex items-center  justify-between "
          >
            <section className=" w-[20%] sm:w-[18%] ">
              <img src={pic} className=" w-full" alt="cloths" />
            </section>
            <section className="w-[75%] flex flex-col gap-2 sm:gap-6 ">
              {/* top part */}
              <div>
                <section className=" justify-between flex">
                  <div>
                    <h3 className=" text-[0.9rem] text-Gray ">{wish.name}</h3>
                    <p className="text-[1rem] pt-1 font-medium ">
                      Double - breasted denim jacket
                    </p>
                  </div>
                  <div className="text-[1.5rem] cursor-pointer text-red-500 ">
                    <IoClose />
                  </div>
                </section>
              </div>
              {/* down part */}
              <div className=" flex items-center justify-between">
                <p className="text-[1rem] font-medium ">₦717,575</p>
                <button className=" bg-black text-white py-2 px-4 text-[0.9rem] ">
                  Add to cart
                </button>
              </div>
            </section>
          </div>
        ))}
      </section>
    </div>
  );
}
