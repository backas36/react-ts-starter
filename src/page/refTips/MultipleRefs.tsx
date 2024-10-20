import { useCallback, useState } from "react";

const MultipleRefs = () => {
    const [heights, setHeights] = useState({});
    const measureRef = useCallback((node: HTMLDivElement) => {
        if (node != null) {
            setHeights((prev) => ({
                ...prev,
                [node.id]: node.getBoundingClientRect().height,
            }));
        }
    }, []);
    console.log(heights);
    return (
        <div className='mt-4 flex flex-col gap-2 border-2 border-black p-4'>
            <h1 className='text-2xl font-bold'>管理多個元素的 Ref</h1>
            <div id='div1' ref={measureRef} style={{ height: "50px" }}>
                Div 1
            </div>
            <div id='div2' ref={measureRef} style={{ height: "100px" }}>
                Div 2
            </div>
            <div id='div3' ref={measureRef} style={{ height: "75px" }}>
                Div 3
            </div>
            <p>{JSON.stringify(heights)}</p>
        </div>
    );
};
export default MultipleRefs;
