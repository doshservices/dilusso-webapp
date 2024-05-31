import { useState } from 'react';
import { faqs } from '../resources/faq';

const Faqs = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section className="pt-12 pb-6 sm:pt-28 px-[5%]">
            <h2 className="font-medium font-outfit leading-none text-[1.25rem] sm:text-[1.8rem] md:text-[2.2rem] mb-6 pb-3 mt-10">
                FAQs
            </h2>
            {faqs.map((faq: any, idx: number) => (
                <div key={idx} className="rounded-[5px] border-b-borderCartActions border-b-[1px] py-2.5 mb-6 max-w-[666px]">
                    <div onClick={() => handleToggle(idx)} className="flex items-center justify-between cursor-pointer">
                        <h3 className="font-outfit font-semibold text-base text-Black">{faq.topic}</h3>
                        <svg width="17" height="17" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.8332 7.08398L9.99984 12.9173L4.1665 7.08398" stroke="#353F38" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    {expandedIndex === idx && (
                        <div className="flex justify-between py-2">
                            <div>
                                <h4 className="font-outfit font-semibold text-base text-Black mb-2">{faq.questionsHeading}</h4>
                                <p className="font-outfit font-medium text-base text-Black leading-[1.8rem] text-sm">{faq.question}</p>
                                <p className="font-outfit font-medium text-base text-Black leading-[1.8rem] text-sm">{faq.question}</p>
                                <p className="font-outfit font-medium text-base text-Black leading-[1.8rem] text-sm">{faq.question}</p>
                            </div>
                            <div>
                                <h4 className="font-outfit font-semibold text-base text-Black mb-2">{faq.answerHeading}</h4>
                                <p className="font-outfit font-medium text-base text-Black leading-[1.8rem] text-sm">{faq.answer}</p>
                                <p className="font-outfit font-medium text-base text-Black leading-[1.8rem] text-sm">{faq.answer}</p>
                                <p className="font-outfit font-medium text-base text-Black leading-[1.8rem] text-sm">{faq.answer}</p>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </section>
    );
};

export default Faqs;
