import { useState } from "react";

import useDebounce from "@/hooks/useDebounce";
import useThrottle from "@/hooks/useThrottle";

const DebounceThrottlePage = () => {
    const [searchInput, setSearchInput] = useState<string>("");

    const loadData = async (searchInput: string) => {
        console.log("loadData");
        if (searchInput === "") {
            return;
        }
        setSearchInput(searchInput);
    };
    const handleLoadDataDebounced = useDebounce(loadData, 3000);
    //const handleLoadDataDebounced = loadData;

    const handleClickThrottle = useThrottle(() => {
        console.count("Throttle");
        console.time("start");
    }, 3000);
    return (
        <div className='p-2'>
            <label className='block font-bold text-gray-500'>
                Debounce:
                <input
                    type='text'
                    onChange={(e) => handleLoadDataDebounced(e.target.value)}
                    className=' appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none'
                />
            </label>
            <div className=''>search input = {searchInput}</div>
            <hr className='my-2 divide-y-2' />

            <button
                onClick={handleClickThrottle}
                className='rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
            >
                Throttle
            </button>
        </div>
    );
};
export default DebounceThrottlePage;
