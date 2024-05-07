import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="h-[100vh] px-[3%] pb-[3%] flex font-medium text-White items-end hero-1 ">
      <section className="  gap-[2%] w-[40%] ">
        <h1 className=" text-[1.5rem] xxl:text-[1.6rem] font-semibold ">Just In: Baddest Collections from Ibiza</h1>
        <p className="text-[0.85rem] xxl:text-[0.9rem] mt-[2%] mb-[7%] ">
          Presenting your new wanderlust wardrobe – from archival scarf prints
          to nature-inspired accents
        </p>
        <Link
          to="/"
          className=" text-OtherWhite  bg-Black rounded-[4px] py-3 px-4 text-[0.85rem] xxl:text-[0.9rem] "
        >
          Shop Collection
        </Link>
      </section>
    </div>
  );
}
