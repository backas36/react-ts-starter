import { TemperatureInput } from "@/feature/temperature/component";

const RenderPropsPage01 = () => {
    return (
        <div>
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
        </div>
    );
};
export default RenderPropsPage01;
