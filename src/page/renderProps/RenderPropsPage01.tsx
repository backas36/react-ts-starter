import { Counter } from "@/feature/counter/component";
import { TemperatureInput } from "@/feature/temperature/component";

const RenderPropsPage01 = () => {
    return (
        <div>
            <h1 className='my-4 text-2xl font-bold text-blue-600'>Render Props Pattern Example 01</h1>
            <TemperatureInput>
                {(value) => {
                    return (
                        <>
                            <TemperatureInput.Kelvin value={value} />
                            <TemperatureInput.Celsius value={value} />
                        </>
                    );
                }}
            </TemperatureInput>
            <h1 className='my-4 text-2xl font-bold text-blue-600'>Render Props Patter example 02</h1>
            <Counter>
                {(count, setCount) => {
                    return (
                        <>
                            <Counter.Select
                                value={count}
                                onChange={(v) => {
                                    setCount(v);
                                }}
                            />
                            <Counter.ShowCounter value={count} />
                            <Counter.Button onClick={() => setCount((prev) => prev + 1)}>Add</Counter.Button>
                            <Counter.Button onClick={() => setCount((prev) => prev - 2)}>-2</Counter.Button>
                        </>
                    );
                }}
            </Counter>
        </div>
    );
};
export default RenderPropsPage01;
