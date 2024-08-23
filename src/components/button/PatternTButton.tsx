import { ReactNode } from "react";

interface IPatternTButtonProps {
    color?: "primary" | "secondary" | "info";
    size?: "small" | "medium" | "large";
    onClick: () => void;
    children: ReactNode;
}
const PatternTButton = ({ color = "primary", size = "medium", onClick, children }: IPatternTButtonProps) => {
    const baseClasses = "font-bold rounded transition-colors duration-300";
    const colorClasses = {
        primary: "bg-blue-500 hover:bg-blue-700 text-white",
        secondary: "bg-green-500 hover:bg-green-700 text-white",
        info: "bg-yellow-500 hover:bg-yellow-700 text-white",
    };
    const sizeClasses = {
        small: "px-2 py-1 text-xs",
        medium: "px-4 py-2 text-base",
        large: "px-8 py-4 text-xl",
    };

    const buttonClasses = `${baseClasses} ${colorClasses[color]} ${sizeClasses[size]}`;

    return (
        <button className={buttonClasses} onClick={onClick}>
            {children}
        </button>
    );
};
export default PatternTButton;
