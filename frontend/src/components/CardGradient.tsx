interface ICardGradient {
    children?: React.ReactNode;
}

export default function CardGradient({ children }: ICardGradient) {
    return (
        <div
            className="flex flex-col flex-1 gap-8 items-center sm:items-start p-1 rounded-xl w-full p-[4px]"
            style={{
                background: `linear-gradient(to bottom, rgba(var(--custom-blue), 0.7), rgba(var(--custom-purple), 0.7), rgba(var(--custom-pink), 0.7))`,
            }}
        >
            <div
                className="rounded-xl p-4 flex-1 w-full backdrop-blur-xxl"
                style={{
                    backgroundColor: 'rgba(var(--background), 0.7'
                }}
            >
                {children}
            </div>
        </div>
    );
}