import { useState } from "react";
import { ItemDetails } from "../Components/Product/Details";
import { ProductDetailsDescription } from "../Components/ProductDescription";
import ProductCards from "../Components/Slider/ProductsCard";
import { useParams } from "react-router-dom";
import { useGetProductsById } from "../ApiCalls/GetProductsById";

interface ProductsState {
    _id: string | null;
    brand_name: {
      name: string;
    } | null;
    price: string | null;
    description: string | null;
    image: string[] | null;
  }

const ProductDetails = () => {
    const [expandedIndex, setExpandedIndex] = useState<boolean>(false);
    const [expandedIndex2, setExpandedIndex2] = useState<boolean>(false);
    const { id } = useParams<{ id: string }>();
    // console.log("product id:", id);

    const { isLoading, isFetching, data: productsData } = useGetProductsById(id!);
    const ProductsData = productsData?.data?.data?.availableProducts[1];
  console.log("products data 1:", ProductsData);
    

    // const handleToggle = (index: number) => {
    //     setExpandedIndex(expandedIndex === index ? null : index);
    // };

    return (
        <div className="pt-16 pb-6 sm:pt-[10rem] px-[5%]">
            <div className="grid md:grid-cols-[2fr_1fr] gap-8">
                <ItemDetails images={ProductsData?.image} />
                <ProductDetailsDescription product={ProductsData} />
            </div>
            <p className="flex items-center font-outfit text-sm mb-8">
                Womenswear
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.69702 3.33366L10.3637 8.00033L5.69702 12.667" stroke="#353F38" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Balmain
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.69702 3.33366L10.3637 8.00033L5.69702 12.667" stroke="#353F38" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Clothing
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.69702 3.33366L10.3637 8.00033L5.69702 12.667" stroke="#353F38" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Demin Jackets
            </p>
            <div className="rounded-[5px] border-b-borderCartActions border-b-[1px] py-2.5 mb-6">
                <div onClick={() => setExpandedIndex(!expandedIndex)} className="flex items-center justify-between cursor-pointer">
                    <h3 className="font-outfit font-semibold text-base text-[#4E4E4E] ml-8">The Details</h3>
                    <svg width="17" height="17" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.8332 7.08398L9.99984 12.9173L4.1665 7.08398" stroke="#353F38" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                {expandedIndex && (
                    <div className="flex justify-between py-2">
                        <div>
                            <h4 className="font-outfit font-semibold text-base text-Black mb-2">Balmain</h4>
                            <p className="font-outfit font-medium text-base text-Black leading-[1.8rem] text-sm">Double - breasted Demin jacket</p>
                        </div>
                        <div>
                            <h4 className="font-outfit font-semibold text-base text-Black mb-2">Highlights</h4>
                            <ul>
                                <li className="font-outfit font-medium text-base text-Black leading-[1.8rem] text-sm">Denim</li>
                                <li className="font-outfit font-medium text-base text-Black leading-[1.8rem] text-sm">Blue</li>
                                <li className="font-outfit font-medium text-base text-Black leading-[1.8rem] text-sm">Cotton</li>
                                <li className="font-outfit font-medium text-base text-Black leading-[1.8rem] text-sm">Embossed gold button</li>
                                <li className="font-outfit font-medium text-base text-Black leading-[1.8rem] text-sm">Long Sleeves</li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
            <div className="rounded-[5px] border-b-borderCartActions border-b-[1px] py-2.5 mb-6">
                <div onClick={() => setExpandedIndex2(!expandedIndex2)} className="flex items-center justify-between cursor-pointer">
                    <h3 className="font-outfit font-semibold text-base text-[#4E4E4E] ml-8">Delivery and Return</h3>
                    <svg width="17" height="17" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.8332 7.08398L9.99984 12.9173L4.1665 7.08398" stroke="#353F38" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                {expandedIndex2 && (
                    <div className="flex justify-between py-2">
                        <div>
                            <h4 className="font-outfit font-semibold text-base text-Black mb-2">Return</h4>
                            <p className="font-outfit font-medium text-base text-Black leading-[1.8rem] text-sm">Free return within 12 days</p>
                            <p className="font-outfit font-medium text-base text-Black leading-[1.8rem] text-sm">Free return within 12 days</p>
                            <p className="font-outfit font-medium text-base text-Black leading-[1.8rem] text-sm">Free return within 12 days</p>
                        </div>
                        <div>
                            <h4 className="font-outfit font-semibold text-base text-Black mb-2">Estimated Delivery</h4>
                            <p className="font-outfit font-medium text-base text-Black leading-[1.8rem] text-sm">Express: May24 - June 1</p>
                            <p className="font-outfit font-medium text-base text-Black leading-[1.8rem] text-sm">Express: May24 - June 1</p>
                            <p className="font-outfit font-medium text-base text-Black leading-[1.8rem] text-sm">Express: May24 - June 1</p>
                        </div>
                    </div>
                )}
            </div>
            <ProductCards />
        </div>
    )
}

export default ProductDetails;