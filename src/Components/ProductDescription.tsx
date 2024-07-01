import { useState } from "react";
import { CartBtn } from "./Button/CartBtn";
import formatPrice from "../functions/FormatPrice";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../redux/slice/cartSlice";
import { toast } from "react-toastify";

interface ProductsState {
    product: {
        _id: string | null;
    brand_name: {
      name: string;
    } | null;
    price: string | null;
    description: string | null;
    image: string[] | null;
    }
  }

export const ProductDetailsDescription = ({product}: ProductsState) => {
    const [selectedCountry, setSelectedCountry] = useState<string>('');
    const dispatch = useDispatch();

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCountry(event.target.value);
    };

    const handleAddToCart = () => {
        if (product._id && product.brand_name?.name && product.price && product.image) {
          dispatch(addItemToCart({
            id: product._id,
            name: product.brand_name.name,
            price: product.price,
            image: product.image[0],
            quantity: 1
          }));
          toast.success("You've added to cart!")
        }
      };

    return (
        <section className="bg-[#f6f6f6] font-outfit p-4 md:p-6">
            <h2 className="text-[1.2rem] font-bold">{product?.brand_name?.name}</h2>
            <p className="text-[1.1rem] my-2">{product?.description}</p>
            <p className="text-[1.1rem] font-medium">{formatPrice(product?.price ?? "0")}</p>
            <p className="text-sm">Light crossbody bag with shoelace strap Light crossbody bag with shoelace strap Light crossbody bag with shoelace strap Light crossbody bag with shoelace strap Light crossbody bag with shoelace strap</p>
            <p className="text-[#4e4e4e] font-medium text-sm my-2">Color: <span className="text-[#AED1E7]"> Lightblue</span></p>
            <div className="flex gap-2">
                <span className="h-[18px] w-[18px] block rounded-full border-[1px] border-[#999999] bg-[#AED1E7]"></span>
                <span className="h-[18px] w-[18px] block rounded-full border-[1px] border-[#999999] bg-[#321656]"></span>
                <span className="h-[18px] w-[18px] block rounded-full border-[1px] border-[#999999] bg-[#743838]"></span>
            </div>
            <div className="border-[1px] border-[#4E4E4E] rounded-[5px] shadow-shawdowCart focus:outline-borderHash outline-offset-2 w-full px-3 my-3">
                <select
                    name=""
                    id=""
                    value=""
                    className='block focus:outline-none w-full py-2.5 bg-transparent text-outfit text-sm'
                    onChange={handleChange}
                >
                    <option value={selectedCountry} disabled>Select size (Balmain France)</option>
                    <option value="34 FR -XS">34 FR -XS</option>
                    <option value="36 FR -S">36 FR -S</option>
                    <option value="38 FR - M">38 FR - M</option>
                    <option value="40 FR - L">40 FR - L</option>
                </select>
            </div>
            <div className="flex gap-2 items-center">
                <div onClick={handleAddToCart}>
                <CartBtn link="" text="Add to Cart" width="w-full" />
                </div>
                <button className="border-[#181818] border-[1px] p-[.8rem]">
                    <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.0303 19.0004L8.58027 17.7004C6.89694 16.1837 5.50527 14.8754 4.40527 13.7754C3.30527 12.6754 2.43027 11.6879 1.78027 10.8129C1.13027 9.93789 0.676107 9.13372 0.417773 8.40039C0.15944 7.66706 0.0302734 6.91706 0.0302734 6.15039C0.0302734 4.58372 0.555273 3.27539 1.60527 2.22539C2.65527 1.17539 3.96361 0.650391 5.53027 0.650391C6.39694 0.650391 7.22194 0.833724 8.00527 1.20039C8.78861 1.56706 9.46361 2.08372 10.0303 2.75039C10.5969 2.08372 11.2719 1.56706 12.0553 1.20039C12.8386 0.833724 13.6636 0.650391 14.5303 0.650391C16.0969 0.650391 17.4053 1.17539 18.4553 2.22539C19.5053 3.27539 20.0303 4.58372 20.0303 6.15039C20.0303 6.91706 19.9011 7.66706 19.6428 8.40039C19.3844 9.13372 18.9303 9.93789 18.2803 10.8129C17.6303 11.6879 16.7553 12.6754 15.6553 13.7754C14.5553 14.8754 13.1636 16.1837 11.4803 17.7004L10.0303 19.0004ZM10.0303 16.3004C11.6303 14.8671 12.9469 13.6379 13.9803 12.6129C15.0136 11.5879 15.8303 10.6962 16.4303 9.93789C17.0303 9.17956 17.4469 8.50456 17.6803 7.91289C17.9136 7.32122 18.0303 6.73372 18.0303 6.15039C18.0303 5.15039 17.6969 4.31706 17.0303 3.65039C16.3636 2.98372 15.5303 2.65039 14.5303 2.65039C13.7469 2.65039 13.0219 2.87122 12.3553 3.31289C11.6886 3.75456 11.2303 4.31706 10.9803 5.00039H9.08027C8.83027 4.31706 8.37194 3.75456 7.70527 3.31289C7.03861 2.87122 6.31361 2.65039 5.53027 2.65039C4.53027 2.65039 3.69694 2.98372 3.03027 3.65039C2.36361 4.31706 2.03027 5.15039 2.03027 6.15039C2.03027 6.73372 2.14694 7.32122 2.38027 7.91289C2.61361 8.50456 3.03027 9.17956 3.63027 9.93789C4.23027 10.6962 5.04694 11.5879 6.08027 12.6129C7.11361 13.6379 8.43027 14.8671 10.0303 16.3004Z" fill="#010101" />
                    </svg>
                </button>
            </div>
            <p className="text-sm text-[#E06E2E] my-3">20% off on your first purchase with the code 20WEB, on orders above  ₦200,00</p>
            <p className="flex items-center gap-2 text-sm mb-2">
                <svg className="shrink-0" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.6969 7.99967C14.6969 11.6816 11.7121 14.6663 8.03019 14.6663C4.34829 14.6663 1.36353 11.6816 1.36353 7.99967C1.36353 4.31778 4.34829 1.33301 8.03019 1.33301C11.7121 1.33301 14.6969 4.31778 14.6969 7.99967ZM13.3635 7.99967C13.3635 10.9452 10.9757 13.333 8.03019 13.333C5.08467 13.333 2.69686 10.9452 2.69686 7.99967C2.69686 5.05416 5.08467 2.66634 8.03019 2.66634C9.60231 2.66634 11.0155 3.34656 11.9917 4.42873L7.36353 9.05687L5.5016 7.19494C5.24125 6.93459 4.81914 6.93459 4.55879 7.19494C4.29844 7.45529 4.29844 7.8774 4.55879 8.13775L6.42072 9.99968C6.94142 10.5204 7.78564 10.5204 8.30633 9.99967L12.7645 5.54151C13.1472 6.27711 13.3635 7.11313 13.3635 7.99967Z" fill="#35383F" />
                </svg>
                <span>Free delivering when you buy up to a higher amount</span>
            </p>
            <p className="flex items-center gap-2 text-sm">
                <svg className="shrink-0" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.6969 7.99967C14.6969 11.6816 11.7121 14.6663 8.03019 14.6663C4.34829 14.6663 1.36353 11.6816 1.36353 7.99967C1.36353 4.31778 4.34829 1.33301 8.03019 1.33301C11.7121 1.33301 14.6969 4.31778 14.6969 7.99967ZM13.3635 7.99967C13.3635 10.9452 10.9757 13.333 8.03019 13.333C5.08467 13.333 2.69686 10.9452 2.69686 7.99967C2.69686 5.05416 5.08467 2.66634 8.03019 2.66634C9.60231 2.66634 11.0155 3.34656 11.9917 4.42873L7.36353 9.05687L5.5016 7.19494C5.24125 6.93459 4.81914 6.93459 4.55879 7.19494C4.29844 7.45529 4.29844 7.8774 4.55879 8.13775L6.42072 9.99968C6.94142 10.5204 7.78564 10.5204 8.30633 9.99967L12.7645 5.54151C13.1472 6.27711 13.3635 7.11313 13.3635 7.99967Z" fill="#35383F" />
                </svg>
                <span>Free delivering when you buy up to a higher amount</span>
            </p>
            <button className="flex items-center text-Black text-sm my-4 gap-2">
                Find out more
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.69694 2.66667C8.69694 2.29848 8.39846 2 8.03027 2C7.66208 2 7.36361 2.29848 7.36361 2.66667V12.0572L4.16834 8.86193C3.908 8.60158 3.48589 8.60158 3.22554 8.86193C2.96519 9.12228 2.96519 9.54439 3.22554 9.80474L7.08746 13.6667C7.60816 14.1874 8.45238 14.1874 8.97308 13.6667L12.835 9.80474C13.0954 9.54439 13.0954 9.12228 12.835 8.86193C12.5747 8.60158 12.1526 8.60158 11.8922 8.86193L8.69694 12.0572V2.66667Z" fill="#35383F" />
                </svg>
            </button>
        </section>
    )
}