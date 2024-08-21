import TButton from "@/components/TButton";
import { WithClickTracking } from "@/components/withClickTracking";

const HocPage = () => {
    return (
        <div>
            <h1 className='text-2xl font-bold'>HOC Click</h1>
            <div className='flex flex-col gap-2'>
                <WithClickTracking trackingInfo='Button1'>
                    <TButton btnText='Click1' />
                </WithClickTracking>
                <WithClickTracking trackingInfo='Button2'>
                    <TButton btnText='Click2' />
                </WithClickTracking>
                <WithClickTracking trackingInfo='Button3'>
                    <TButton btnText='Click3' />
                </WithClickTracking>
            </div>
        </div>
    );
};
export default HocPage;
