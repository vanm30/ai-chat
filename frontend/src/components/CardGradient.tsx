interface ICardGradient {
    children?: React.ReactNode;
}

export default function CardGradient({ children }: ICardGradient) {
    return (
        <div
            className="flex flex-col flex-1 gap-8 items-center sm:items-start p-[4px] rounded-xl p-px w-full"
            style={{
               
            }}
        >
            <div
                className="rounded-xl p-4 flex-1 w-full backdrop-blur-xxl"
                style={{
                    backgroundColor: 'rgba(var(--background), 0.65'
                }}
            >
                {children}
            </div>
        </div>
    );
}