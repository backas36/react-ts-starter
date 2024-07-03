import { useEffect, useLayoutEffect } from "react";

const UseLayoutEffectPage = () => {
    useEffect(() => {
        console.log("useEffect");
        return () => {
            console.log("useEffect return");
        };
    }, []);

    useLayoutEffect(() => {
        console.log("useLayoutEffect");
        return () => {
            console.log("useLayoutEffect return");
        };
    }, []);
    return <div>UseLayoutEffectPage</div>;
};
export default UseLayoutEffectPage;
