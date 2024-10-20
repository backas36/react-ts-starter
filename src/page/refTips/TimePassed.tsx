import { useRef, useState } from "react";

// 官方範例，使用 ref 建立碼錶
const TimePassed = () => {
    const [startTime, setStartTime] = useState<number | null>(null);
    const [now, setNow] = useState<number | null>(null);
    const intervalRef = useRef<number>();

    const handleStart = () => {
        setStartTime(Date.now());
        setNow(Date.now());
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setNow(Date.now());
        }, 10);
    };

    const handleStop = () => {
        clearInterval(intervalRef.current);
    };
    let secondsPassed = 0;
    if (startTime !== null && now !== null) {
        secondsPassed = (now - startTime) / 1000;
    }
    return (
        <div className='mt-4 flex flex-col gap-2 border-2 border-black p-4'>
            <h1 className='text-2xl font-bold'>Time passed : {secondsPassed.toFixed(3)}</h1>
            <button className='border-2 border-blue-400 bg-blue-400 text-white' onClick={handleStart}>
                Start
            </button>{" "}
            <button className='border-2 border-blue-400 bg-blue-400 text-white' onClick={handleStop}>
                Stop
            </button>
        </div>
    );
};
export default TimePassed;
