import { useState } from "react"
import closeIcon from '../../assets/close.svg'

interface Props {
    close: () => void
}

const Auth = ({ close }: Props) => {
    const [tab, setTab] = useState<string>('signin')

    return (
        <div className="fixed inset-0 z-100 bg-transparentDark pt-6">
            <section className="bg-white w-full max-w[550px]">
                <button onClick={close}>
                    <img src={closeIcon} alt="" />
                </button>
            </section>
        </div>
    )
}

export default Auth;