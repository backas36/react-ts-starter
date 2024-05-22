// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useThrottle = <F extends (...args: any[]) => void>(fn: F, delay: number) => {
    let timeout: number | null = null;

    return (...args: Parameters<F>) => {
        if (timeout) {
            return;
        }
        fn(...args);
        console.timeLog("start");
        timeout = setTimeout(() => {
            timeout = null;
        }, delay);
    };
};
export default useThrottle;
