import { useState } from "react";

const RenderPropsPage01 = () => {
    return (
        <div>
            <TemperatureInput />
            <Kelvin />
            <Celsius />
        </div>
    );
};
export default RenderPropsPage01;

const TemperatureInput = () => {
    const [value, setValue] = useState("");
    return (
        <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className='w-1/2 rounded-lg border px-3 py-2 text-gray-700 focus:border-blue-500 focus:outline-none'
            placeholder='Enter temperature'
        />
    );
};

const Kelvin = ({ value }: { value: number }) => {
    return (
        <div className='w-1/2 rounded-md bg-blue-100 p-3 text-lg font-semibold text-blue-600 shadow-sm'>
            Kelvin: {value}
        </div>
    );
};

const Celsius = ({ value }: { value: number }) => {
    return (
        <div className='w-1/2 rounded-md bg-blue-100 p-3 text-lg font-semibold text-blue-600 shadow-sm'>
            Celsius: {value}
        </div>
    );
};
