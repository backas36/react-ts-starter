// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useDebounce = <F extends (...args: any[]) => void>(fn: F, delay: number) => {
    let timeout: number | null = null;
    return (...args: Parameters<F>) => {
        if (timeout) {
            clearTimeout(timeout);
        }
        console.count("useDebounce");
        timeout = setTimeout(() => {
            fn(...args);
        }, delay);
    };
};
export default useDebounce;
