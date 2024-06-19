import { useEffect, useState } from "react";
import { CartBtn } from "../Button/CartBtn";
import { AuthInput } from "../Input";
import { IoClose } from "react-icons/io5";
import { EmailVerification } from "./EmailVerification";

interface Props {
  close: () => void;
}

export const ForgetPassword = ({ close }: Props) => {
    const [showEmailVerification, setShowEmailVerification] = useState<boolean>(false);

    useEffect(() => {
        if (showEmailVerification === true) {
          document.body.style.overflow = "hidden";
        }
        return (): void => {
          document.body.style.overflow = "unset";
        };
      }, [showEmailVerification]);
      
  return (
    <div className="fixed inset-0 flex items-center z-100 bg-transparentDark">
      <div className=" mx-auto max-w-[471px] w-[95%] bg-White py-[1.5%] px-[2%]  max-h-[100vh] overflow-y-auto ">
        <header className="flex justify-end">
          <button onClick={close} className="text-[1.5rem] ">
            <IoClose />
          </button>
        </header>
        <div className="">
          <div className="flex flex-col gap-2">
            <h2 className=" text-[1.3rem] font-semibold ">Forgot password?</h2>
            <p className=" text-base text-justify font-medium">
              Enter your DI LUSSO email address to receive a password rest link.{" "}
            </p>
          </div>
          <div className=" pb-3">
            <AuthInput label="Email" name="email" type="email" />
          </div>
          <CartBtn
            text="Reset Password"
            width="w-full"
            link="/checkout"
            onClick={() => {close; setShowEmailVerification(!showEmailVerification)}}
          />
        </div>
        <button
          onClick={close}
          className=" block mx-auto font-outfit text-base font-semibold mt-4"
        >
          Go back to sign in
        </button>
      </div>
      {showEmailVerification ? <EmailVerification close={() => setShowEmailVerification(!showEmailVerification)} /> : null}
    </div>
  );
};
