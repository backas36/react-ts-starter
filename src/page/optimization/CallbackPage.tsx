import { memo, useCallback, useRef, useState } from "react";

const MyComponent = ({ fn, withUseCallback }: { fn: () => void; withUseCallback: boolean }) => {
    const ref = useRef(0);
    ref.current++;
    const callback = withUseCallback ? "useCallback" : "no useCallback";
    return (
        <div>
            <span className='mr-4 '>
                {callback}, ref:{ref.current}
            </span>
            <button onClick={fn} className='bg-slate-400 px-2 text-fuchsia-500'>
                click
            </button>
        </div>
    );
};
const MemoComponent = memo(({ fn, withUseCallback }: { fn: () => void; withUseCallback: boolean }) => {
    return <div className='text-red-400'>Memo:{MyComponent({ fn, withUseCallback })}</div>;
});

const CallbackPage = () => {
    const [count, setCount] = useState(1);
    const handleSomethingUseCallback = useCallback(() => {
        setCount((count) => {
            return count + 1;
        });
    }, []);

    const handleChange = () => {
        setCount((count) => count + 1);
    };

    return (
        <div className='mx-auto my-11 flex w-1/2 flex-col gap-4'>
            <button onClick={handleChange} className='bg-slate-400 text-fuchsia-500'>
                {count}
            </button>
            <MyComponent fn={handleSomethingUseCallback} withUseCallback={true} />
            <MemoComponent fn={handleChange} withUseCallback={false} />
            <MemoComponent fn={handleSomethingUseCallback} withUseCallback={true} />
        </div>
    );
};
export default CallbackPage;
