import { useState } from "react";

const RenderPropsPage01 = () => {
    const [value, setValue] = useState("");

    return (
        <div>
            <TemperatureInput value={value} setValue={setValue} />
            <Kelvin value={value} />
            <Celsius value={value} />
        </div>
    );
};
export default RenderPropsPage01;

const TemperatureInput = ({ value, setValue }: { value: string; setValue: (value: string) => void }) => {
    return (
        <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className='w-1/2 rounded-lg border px-3 py-2 text-gray-700 focus:border-blue-500 focus:outline-none'
            placeholder='Enter temperature'
        />
    );
};

const Kelvin = ({ value }: { value: string }) => {
    return (
        <div className='w-1/2 rounded-md bg-blue-100 p-3 text-lg font-semibold text-blue-600 shadow-sm'>
            Kelvin: {value}
        </div>
    );
};

const Celsius = ({ value }: { value: string }) => {
    return (
        <div className='w-1/2 rounded-md bg-blue-100 p-3 text-lg font-semibold text-blue-600 shadow-sm'>
            Celsius: {value}
        </div>
    );
};
