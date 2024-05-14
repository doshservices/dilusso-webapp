import { Link } from "react-router-dom";

interface Props {
  text: string;
  link: string;
}

export default function Button(props: Props) {
  return (
    <Link
      to={props.link}
      className=" text-[#222222] text-[0.9rem] sm:text-[0.8rem] lg:text-[0.85rem] xxl:text-[0.9rem] border-[1px] font-semibold hover:bg-black hover:text-White border-Black py-3 sm:py-2 lg:py-2 px-5 sm:px-4 lg:px-6  "
    >
      {props.text}
    </Link>
  );
}
