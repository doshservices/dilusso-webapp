import { CartBtn } from "../Button/CartBtn"
import { item } from "./ItemCard"

export const CartSummary = () => {
    return (
        <section className="pb-12 md:px-4 md:sticky top-[10rem]">
            <h2 className="font-medium font-outfit leading-none text-[1.25rem] sm:text-[1.8rem] md:text-[2.2rem] mb-6 text-center border-b-[1px] border-b-borderHash pb-3">
                Summary
            </h2>
            <div className="flex items-end gap-6 border-b-[1px] border-b-[#e9e9e9] py-2">
                <img src={item} className="h-[70px]" alt="" />
                <div className="font-outfit">
                    <h3 className="text-sm text-[#4E4E4E]">Balmain</h3>
                    <p className="font-medium mt-1 mb-2.5">Double - breasted denim jacket</p>
                    <p className="font-medium">₦717,575</p>
                </div>
            </div>
            <div className="flex justify-between font-semibold font-outfit text-base my-8 px-4">
                <h3>Subtotal</h3>
                <p>₦717,575</p>
            </div>
            <div className="mx-auto max-w-[80%]">
                <CartBtn link="" text='Continue' width="w-full" />
            </div>
        </section>
    )
}