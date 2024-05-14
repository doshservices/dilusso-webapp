import { Link } from "react-router-dom";

interface Props {
  text: string;
  link: string;
}

export default function Button(props: Props) {
  return (
    <Link
      to={props.link}
      className=" text-[#222222] border-[1px] font-semibold hover:bg-black hover:text-White border-Black py-3 px-6 text-[0.85rem] xxl:text-[0.9rem] "
    >
      {props.text}
    </Link>
  );
}
