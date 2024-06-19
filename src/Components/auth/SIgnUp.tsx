import { CartBtn } from "../Button/CartBtn"
import { AuthInput } from "../Input"
import { GoogleButton } from "../Button/GoogleBtn"

const bonus = [
    'Enjoy 10% off your first order',
    'Follow your online orders and access your purchase history',
    'Get Rewards on every order',
    'Create your personal Wish List'
]

export const SignUp = () => {
    return (
        <section>
            <div className="border-b-[1px] border-b-[#2222224D] py-6">
                {bonus.map((text: string, index: number) =>
                    <p key={index}
                        className="flex items-center gap-2 text-sm mb-2 font-outfit">
                        <svg className="shrink-0" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.6969 7.99967C14.6969 11.6816 11.7121 14.6663 8.03019 14.6663C4.34829 14.6663 1.36353 11.6816 1.36353 7.99967C1.36353 4.31778 4.34829 1.33301 8.03019 1.33301C11.7121 1.33301 14.6969 4.31778 14.6969 7.99967ZM13.3635 7.99967C13.3635 10.9452 10.9757 13.333 8.03019 13.333C5.08467 13.333 2.69686 10.9452 2.69686 7.99967C2.69686 5.05416 5.08467 2.66634 8.03019 2.66634C9.60231 2.66634 11.0155 3.34656 11.9917 4.42873L7.36353 9.05687L5.5016 7.19494C5.24125 6.93459 4.81914 6.93459 4.55879 7.19494C4.29844 7.45529 4.29844 7.8774 4.55879 8.13775L6.42072 9.99968C6.94142 10.5204 7.78564 10.5204 8.30633 9.99967L12.7645 5.54151C13.1472 6.27711 13.3635 7.11313 13.3635 7.99967Z" fill="#35383F" />
                        </svg>
                        <span>{text}</span>
                    </p>
                )}
            </div>
            <AuthInput
                label="Full name"
                name='fullName'
                type='fullName'
            />
            <AuthInput
                label="Email"
                name='email'
                type='email'
            />
            <AuthInput
                label="Password"
                name='password'
                type='password'
            />
            <div className="mt-7">
                <CartBtn link="" text="Sign up" width="w-full" />
            </div>
            <p className="text-center font-outfit text-Black my-4">OR</p>
            <div className="mb-6">
                <GoogleButton />
            </div>
        </section>
    )
}