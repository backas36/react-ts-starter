import { ForwardedRef, forwardRef, useState } from "react";

const ForwardFormRef = forwardRef((_, ref: ForwardedRef<HTMLInputElement>) => {
    const [isShow, setIsShow] = useState(false);
    const toggleInput = () => {
        setIsShow((prev) => !prev);
    };
    console.log(isShow);
    return (
        <form className='mt-4'>
            <button
                onClick={toggleInput}
                type='button'
                className='rounded bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600'
            >
                ToggleInput
            </button>
            {isShow && (
                <input
                    ref={ref}
                    className='rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
            )}
        </form>
    );
});
export default ForwardFormRef;
