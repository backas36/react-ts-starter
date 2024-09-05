import { ReactNode, useState } from "react";

type Props = {
    children: (value: string) => ReactNode;
};
const Input = (props: Props) => {
    const [value, setValue] = useState("");

    return (
        <>
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className='w-1/2 rounded-lg border px-3 py-2 text-gray-700 focus:border-blue-500 focus:outline-none'
                placeholder='Enter temperature'
            />
            {props.children(value)}
        </>
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
Input.Kelvin = Kelvin;
Input.Celsius = Celsius;
export default Input;
