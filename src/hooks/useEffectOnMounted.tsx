import { DependencyList, useEffect, useRef } from "react";

const useEffectOnMounted = (cb: () => void, deps: DependencyList) => {
    const justMounted = useRef(true);
    useEffect(() => {
        if (!justMounted.current) {
            return cb();
        }
        justMounted.current = false;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
};

export default useEffectOnMounted;
