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
            <Counter />
        </div>
    );
};
export default RenderPropsPage01;
