import { memo, useRef, useState } from "react";

//const temp = { name: "Component" };

const RerenderComponent = ({ demoProps }: { demoProps: string | { name: string } }) => {
    const refCount = useRef(0);
    refCount.current++;
    console.count("rerender");
    return (
        <div>
            {JSON.stringify(demoProps)}, {refCount.current}
        </div>
    );
};

//const MemoComponent = memo(RerenderComponent);
const MemoComponent = memo(RerenderComponent, (prevProps, nextProps) => {
    if (typeof prevProps.demoProps === "object" && typeof nextProps.demoProps === "object") {
        return prevProps.demoProps.name === nextProps.demoProps.name;
    }
    return false;
});

const MemoPage = () => {
    const temp = { name: "Component" };
    const [input, setInput] = useState("");
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
            <RerenderComponent demoProps={"RerenderComponent"} />
            <MemoComponent demoProps={temp} />
        </div>
    );
};
export default MemoPage;

// memo
// 1. 當 props 不變時，不會重新渲染
