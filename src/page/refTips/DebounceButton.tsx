import { ReactNode, useRef } from "react";

interface IProps {
    onClick: () => void;
    delayTime: number; //ms
    children: ReactNode;
}
const DebounceButton = ({ onClick, delayTime, children }: IProps) => {
    const timeoutRef = useRef<number | null>(null);
    const handleClick = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
            onClick();
        }, delayTime);
    };
    return (
        <div className='mt-4 border-t-2 border-red-400 pt-4'>
            <button
                className='rounded bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
                onClick={handleClick}
            >
                {children}
            </button>
        </div>
    );
};
export default DebounceButton;
