import { useDispatch } from "react-redux";
import item from "../../assets/item.png";
import formatPrice from "../../functions/FormatPrice";
import { removeItemFromCart } from "../../redux/slice/cartSlice";
import { toast } from "react-toastify";
import { IoClose } from "react-icons/io5";

interface CartState {
  cartItem: {
    _id: string;
    name: string;
    price: string;
    image: string;
    description: string;
  } | null;
}

export { item };

export const Items = ({ cartItem }: CartState) => {
  const dispatch = useDispatch();
//   const isInCart = cartItems.some((item: { id: string | null; }) => item.id === product?._id);

  const handleRemoveFromCart = (productId: string) => {
    if (productId) {
      dispatch(removeItemFromCart(productId));
      toast.success("You've removed the item from the cart!");
    }
  };

  return (
    <div className="flex items-center gap-8 border-b-[#E9E9E9] border-b-[1px] pt-6 pb-2 pl-4 sm:pl-8 pr-4 sm:pr-6">
      <div className="  ">
        <img
          src={cartItem?.image}
          className="w-[5rem] h-[7rem] object-contain"
          alt="Product Image"
        />
      </div>
      <div className="grow">
        <div className="flex items-center justify-between">
          <h3 className="font-outfit text-[#4E4E4E] text-sm">
            {cartItem?.name}
          </h3>
          <button className=" text-red-500 text-[1.3rem] " onClick={() => handleRemoveFromCart(cartItem?._id ?? "")}>
            <IoClose />
          </button>
        </div>
        <p className="font-outfit text-base text-Black font-medium my-1">
          {cartItem?.description}
        </p>
        <div className="flex items-center gap-10">
          <p className="font-outfit text-[#4E4E4E] text-sm">Size 36 FR</p>
          <button className="text-[#975555] border-b-[1px] border-b-[#975555] text-sm">
            Edit
          </button>
        </div>
        <div className="flex items-center justify-between mt-4">
          <p className="text-base font-medium font-outfit text-Black">
            {formatPrice(cartItem?.price ?? "0")}
          </p>
          <div className="flex items-center border-borderCartActions border-[1px] w-fit px-2 gap-3">
            <button>
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 4H3.83333H14.5"
                  stroke="#25282B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.83334 3.99967V2.66634C5.83334 2.31272 5.97382 1.97358 6.22387 1.72353C6.47392 1.47348 6.81305 1.33301 7.16668 1.33301H9.83334C10.187 1.33301 10.5261 1.47348 10.7762 1.72353C11.0262 1.97358 11.1667 2.31272 11.1667 2.66634V3.99967M13.1667 3.99967V13.333C13.1667 13.6866 13.0262 14.0258 12.7762 14.2758C12.5261 14.5259 12.187 14.6663 11.8333 14.6663H5.16668C4.81305 14.6663 4.47392 14.5259 4.22387 14.2758C3.97382 14.0258 3.83334 13.6866 3.83334 13.333V3.99967H13.1667Z"
                  stroke="#25282B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.16666 7.33301V11.333"
                  stroke="#25282B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.83334 7.33301V11.333"
                  stroke="#25282B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <p className="font-medium">1</p>
            <button>
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.3333 4.16634C11.3333 3.7061 10.9602 3.33301 10.5 3.33301C10.0398 3.33301 9.66668 3.7061 9.66668 4.16634V9.16634H4.66668C4.20644 9.16634 3.83334 9.53944 3.83334 9.99967C3.83334 10.4599 4.20644 10.833 4.66668 10.833H9.66668V15.833C9.66668 16.2932 10.0398 16.6663 10.5 16.6663C10.9602 16.6663 11.3333 16.2932 11.3333 15.833V10.833H16.3333C16.7936 10.833 17.1667 10.4599 17.1667 9.99967C17.1667 9.53944 16.7936 9.16634 16.3333 9.16634H11.3333V4.16634Z"
                  fill="#35383F"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
