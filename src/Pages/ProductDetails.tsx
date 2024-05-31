import { ItemDetails } from "../Components/Product/Details";
import { ProductDetailsDescription } from "../Components/ProductDescription";
import ProductCards from "../Components/Slider/ProductsCard";

const ProductDetails = () => {

    return (
        <div className="pt-16 pb-6 sm:pt-[10rem] px-[5%]">
            <div className="grid md:grid-cols-[2fr_1fr] gap-8">
                <ItemDetails />
                <ProductDetailsDescription />
            </div>
            <p className="flex items-center font-outfit text-sm">
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
            <ProductCards />
        </div>
    )
}

export default ProductDetails;