import PatternBtn from "@/components/button/PatternBtn";
import { ReactNode, useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div className='flex items-center justify-center space-x-4 rounded-xl bg-gray-50 p-6 shadow-lg'>
            <Button onClick={() => setCount((prev) => prev + 1)}>+</Button>
            <ShowCounter value={count} />
            <Button onClick={() => setCount((prev) => prev - 1)}>-</Button>
            <Select value={count} onChange={(value) => setCount(value)} />
        </div>
    );
};
export default Counter;

const ShowCounter = ({ value }: { value: number }) => {
    return (
        <div className='flex w-24 items-center justify-center rounded-lg bg-gray-100 p-4 text-4xl font-bold text-blue-600 shadow-md'>
            {value}
        </div>
    );
};

const Button = ({ onClick, children }: { onClick: () => void; children: ReactNode }) => {
    return (
        <PatternBtn size='large' onClick={onClick}>
            {children}
        </PatternBtn>
    );
};

const counterValueOptions = [5, 10, 15];
const Select = ({ value, onChange }: { value: number; onChange: (value: number) => void }) => {
    return (
        <select
            value={value}
            onChange={(e) => {
                onChange(Number(e.target.value));
            }}
        >
            <option value='0' defaultValue={0}>
                Select
            </option>
            {counterValueOptions.map((el) => {
                return (
                    <option key={el} value={el}>
                        {el}
                    </option>
                );
            })}
        </select>
    );
};
