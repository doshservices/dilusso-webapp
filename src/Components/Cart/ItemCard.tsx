import item from '../../assets/item.png';

export { item }

export const Items = () => (
    <div className='flex items-center gap-8 border-b-[#E9E9E9] border-b-[1px] pt-6 pb-2 pl-4 sm:pl-8 pr-4 sm:pr-6'>
        <img src={item} alt="" />
        <div className='grow'>
            <div className='flex items-center justify-between'>
                <h3 className="font-outfit text-[#4E4E4E] text-sm">Balmain</h3>
                <button>
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.97141 4.02827C4.71107 3.76792 4.28896 3.76792 4.02861 4.02827C3.76826 4.28862 3.76826 4.71073 4.02861 4.97108L7.55721 8.49969L4.02862 12.0283C3.76828 12.2886 3.76828 12.7107 4.02862 12.9711C4.28897 13.2314 4.71108 13.2314 4.97143 12.9711L8.50002 9.44249L12.0286 12.9711C12.289 13.2314 12.7111 13.2314 12.9714 12.9711C13.2318 12.7107 13.2318 12.2886 12.9714 12.0283L9.44283 8.49969L12.9714 4.97108C13.2318 4.71073 13.2318 4.28862 12.9714 4.02827C12.7111 3.76792 12.289 3.76792 12.0286 4.02827L8.50002 7.55688L4.97141 4.02827Z" fill="#FF0000" />
                    </svg>
                </button>
            </div>
            <p className="font-outfit text-base text-Black font-medium my-1">Double - breasted denim jacket</p>
            <div className='flex items-center gap-10'>
                <p className="font-outfit text-[#4E4E4E] text-sm">Size 36 FR</p>
                <button className='text-[#975555] border-b-[1px] border-b-[#975555] text-sm'>Edit</button>
            </div>
            <div className='flex items-center justify-between mt-4'>
                <p className="text-base font-medium font-outfit font-medium text-Black">₦717,575</p>
                <div className="flex items-center border-borderCartActions border-[1px] w-fit px-2 gap-3">
                    <button>
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 4H3.83333H14.5" stroke="#25282B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5.83334 3.99967V2.66634C5.83334 2.31272 5.97382 1.97358 6.22387 1.72353C6.47392 1.47348 6.81305 1.33301 7.16668 1.33301H9.83334C10.187 1.33301 10.5261 1.47348 10.7762 1.72353C11.0262 1.97358 11.1667 2.31272 11.1667 2.66634V3.99967M13.1667 3.99967V13.333C13.1667 13.6866 13.0262 14.0258 12.7762 14.2758C12.5261 14.5259 12.187 14.6663 11.8333 14.6663H5.16668C4.81305 14.6663 4.47392 14.5259 4.22387 14.2758C3.97382 14.0258 3.83334 13.6866 3.83334 13.333V3.99967H13.1667Z" stroke="#25282B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7.16666 7.33301V11.333" stroke="#25282B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9.83334 7.33301V11.333" stroke="#25282B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <p className="font-medium">1</p>
                    <button>
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.3333 4.16634C11.3333 3.7061 10.9602 3.33301 10.5 3.33301C10.0398 3.33301 9.66668 3.7061 9.66668 4.16634V9.16634H4.66668C4.20644 9.16634 3.83334 9.53944 3.83334 9.99967C3.83334 10.4599 4.20644 10.833 4.66668 10.833H9.66668V15.833C9.66668 16.2932 10.0398 16.6663 10.5 16.6663C10.9602 16.6663 11.3333 16.2932 11.3333 15.833V10.833H16.3333C16.7936 10.833 17.1667 10.4599 17.1667 9.99967C17.1667 9.53944 16.7936 9.16634 16.3333 9.16634H11.3333V4.16634Z" fill="#35383F" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
)