import { Link } from "react-router-dom";

interface Props {
  text: string;
  link: string;
}

export default function Button(props: Props) {
  return (
    <Link
      to={props.link}
      className=" text-OtherWhite  bg-Black rounded-[4px] py-3 px-4 text-[0.85rem] xxl:text-[0.9rem] "
    >
      {props.text}
    </Link>
  );
}
