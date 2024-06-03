interface Props {
    text: string;
    onClick?: () => void;
    width?: string
}

export const CartBtn = ({ onClick, text, width }: Props) => {
    return (
        <button onClick={onClick}
            className={`${width} border-Black block text-white text-base border-[1px] font-semibold bg-Black py-3 px-5`}
        >
            {text}
        </button>
    );
}
