//import { useState } from "react";

const DebounceThrottlePage = () => {
    //const [data, setData] = useState([]);
    const loadData = (searchInput: string) => {
        console.log(searchInput);
    };
    const handleLoadDataDebounced = (searchInput: string) => loadData(searchInput);
    return (
        <div>
            <label className='block text-gray-500 font-bold'>
                Debounce:
                <input
                    type='text'
                    onChange={(e) => handleLoadDataDebounced(e.target.value)}
                    className=' appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500 bg-gray-200'
                />
            </label>
        </div>
    );
};
export default DebounceThrottlePage;
