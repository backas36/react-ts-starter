import { useState } from "react";

import useDebounce from "@/hooks/useDebounce";

interface ICountry {
    name: string;
}

const DebounceThrottlePage = () => {
    const [data, setData] = useState<ICountry[] | null>(null);
    const loadData = async (searchInput: string) => {
        console.count("loadData");
        if (searchInput === "") {
            setData(null);
            return;
        }
        const response = await fetch(`https://countriesnow.space/api/v0.1/countries/positions`);
        const resData = await response.json();
        const countries = resData.data.filter((c: ICountry) => {
            if (c.name.toLowerCase().includes(searchInput.toLowerCase())) {
                return {
                    name: c.name,
                };
            }
        });
        setData(countries);
    };
    const handleLoadDataDebounced = useDebounce(loadData, 5000);
    //const handleLoadDataDebounced = loadData;
    return (
        <div>
            <label className='block font-bold text-gray-500'>
                Debounce:
                <input
                    type='text'
                    onChange={(e) => handleLoadDataDebounced(e.target.value)}
                    className=' appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none'
                />
            </label>
            <div className=''>
                {data &&
                    data.length > 0 &&
                    data.map((country, idx) => {
                        return <div key={idx}>{country.name}</div>;
                    })}
            </div>
        </div>
    );
};
export default DebounceThrottlePage;
