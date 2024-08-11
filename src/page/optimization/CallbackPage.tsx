import { memo, useCallback, useRef, useState } from "react";

const MyComponent = ({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fn,
    withUseCallback,
}: {
    fn: (e: React.ChangeEvent<HTMLInputElement>) => void;
    withUseCallback: boolean;
}) => {
    const ref = useRef(0);
    ref.current++;
    const callback = withUseCallback ? "useCallback" : "no useCallback";
    return (
        <p>
            MyComponent {callback}, ref:{ref.current}
        </p>
    );
};

const MemoComponent = memo(MyComponent);
const CallbackPage = () => {
    const [input, setInput] = useState("");

    const handleSomethingUseCallback = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    return (
        <div className='mx-auto my-11 flex w-1/2 flex-col gap-4'>
            <input
                type='text'
                value={input}
                onChange={handleChange}
                className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:ring-blue-500'
            />

            <MemoComponent fn={handleSomethingUseCallback} withUseCallback={true} />
            <MemoComponent fn={handleChange} withUseCallback={false} />
        </div>
    );
};
export default CallbackPage;
