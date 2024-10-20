import { useEffect, useRef } from "react";

const RefTipsPage = () => {
    // 使用一般方法建立 ref
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <div>
            <input ref={inputRef} className='border-2  focus:outline-none focus:ring-2 focus:ring-blue-500' />
        </div>
    );
};
export default RefTipsPage;
