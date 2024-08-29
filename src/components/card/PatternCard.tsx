interface IPatternCardProps {
    variant: "default" | "highlight" | "dark";
    widthType: "narrow" | "wide" | "full";
    hasShadow?: boolean;
    actionFn?: () => void;
    title: string;
    subtitle?: string;
    description: string;
    image: string;
}
const PatternCard = ({
    variant,
    widthType,
    hasShadow,
    actionFn,
    title,
    description,
    image,
    subtitle,
}: IPatternCardProps) => {
    const variantStyles = {
        default: "bg-white text-gray-800",
        highlight: "bg-yellow-100 text-gray-900",
        dark: "bg-gray-800 text-white",
    };

    const widthStyles = {
        narrow: "max-w-sm",
        wide: "max-w-xl",
        full: "w-full",
    };

    const shadowStyle = hasShadow ? "shadow-lg" : "";

    const cardClasses = `${variantStyles[variant]} ${widthStyles[widthType]} ${shadowStyle} overflow-hidden rounded transition duration-300 ease-in-out transform hover:scale-105`;
    return (
        <div className={cardClasses}>
            <img className='w-full' src={image} alt='Card image' />
            <div className='px-6 py-4'>
                <div className='mb-2 text-xl font-bold'>{title}</div>
                {subtitle && <div className='mb-2 text-lg'>{subtitle}</div>}
                <p className='text-base text-gray-700'>{description}</p>
            </div>
            <div className='px-6 pb-2 pt-4'>
                {actionFn && (
                    <button
                        className='rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
                        onClick={actionFn}
                    >
                        Action Button
                    </button>
                )}
            </div>
        </div>
    );
};
export default PatternCard;
