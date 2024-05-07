import Button from "../../../Components/Button/Button";

export default function NewArrivals() {
  return (
    <div className="px-[5%] py-[1%] ">
      <hr className=" my-3 border-opacity-20 border-Black border-[1px] " />

      <div className=" flex">
      <section className=" w-[35%] ">
        <small className=" text-[0.85rem] xxl:text-[0.9rem] ">100+ new items</small>
        <h2 className=" font-semibold text-[2.1rem] xxl:text-[2.2rem] ">NEW ARRIVALS</h2>
        <p className=" leading-[160%] text-[1rem] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <div className=" my-3">
        <Button text="Shop New Arrivals" link="" />
        </div>
      </section>
      </div>
    </div>
  );
}
