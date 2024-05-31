import { useState } from "react";
import { DeliveryAddress } from "../../Components/Cart/Delivery";
import { CartSummary } from "../../Components/CartSummary";

const CheckOut = () => {
    const [selectedButton, setSelectedButton] = useState('');

    const setActiveTab = (tab: string) => {
        switch (tab) {
            case 'address':
                return 'address';
            case 'delivery':
                return 'delivery';
            case 'review':
                return 'review';
            default:
                return 'address';
        }
    };

    const activeTabs = setActiveTab(selectedButton)

    return (
        <div className="pt-20 pb-8 sm:pt-36 px-[5%] md:grid grid-cols-[2fr_1fr] gap-[5%]">
            <div>
                <div className="flex gap-6 sm:gap-12 mt-8">
                    <button style={{ color: activeTabs === 'address' ? 'Black' : '#999999' }}
                        className='grow font-outfit font-bold text-base flex gap-1 items-center'
                        onClick={() => setSelectedButton('address')}
                    >
                        <span>Address</span>
                        <span className="inline-block h-[1.5px] bg-Black w-full max-w-[170px]"></span>
                    </button>
                    <button
                        style={{ color: activeTabs === 'delivery' ? 'Black' : '#999999' }}
                        className='grow font-outfit font-bold text-base flex gap-1 items-center'
                        onClick={() => setSelectedButton('delivery')}
                    >
                        <span>Delivery</span>
                        <span className="inline-block h-[1.5px] bg-Black w-full max-w-[170px]"></span>
                    </button>
                    <button
                        onClick={() => setSelectedButton('review')}
                        style={{ color: activeTabs === 'review' ? 'Black' : '#999999' }}
                        className='grow font-outfit font-bold text-base flex gap-1 items-center'
                    >
                        <span>Review</span>
                        <span className="inline-block h-[1.5px] bg-Black w-full max-w-[170px]"></span>
                    </button>
                </div>
                {activeTabs === 'address' ?
                    <DeliveryAddress />
                    : null
                }
            </div>
            <CartSummary />
        </div>
    )
}

export default CheckOut;