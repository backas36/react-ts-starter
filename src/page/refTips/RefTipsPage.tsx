import { useEffect, useRef } from "react";
import TimePassed from "./TimePassed";

const RefTipsPage = () => {
    // 使用一般方法建立 ref
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    // 使用 useCallback 建立 ref
    //const inputRef = useCallback((inputRef: HTMLInputElement) => {
    //    inputRef?.focus();
    //}, []);

    // 此方式會沒有 focus 效果
    //const formRef = useRef<HTMLInputElement>(null);
    //useEffect(() => {
    //    formRef.current?.focus();
    //}, []);

    //const formRef = useCallback((inputNode: HTMLDivElement) => {
    //    if (inputNode) {
    //        inputNode.focus();
    //    }
    //}, []);
    return (
        <div>
            <input ref={inputRef} className='border-2  focus:outline-none focus:ring-2 focus:ring-blue-500' />
            <TimePassed />
            {/*
            <MultipleRefs />
            <ForwardFormRef ref={formRef as React.RefCallback<HTMLDivElement>} />*/}
        </div>
    );
};
export default RefTipsPage;
