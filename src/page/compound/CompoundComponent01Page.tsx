import CompoundSwitch from "@/components/switch/CompoundSwitch";
import BasicTabs from "@/components/tab/BasicTabs";

const CompoundComponent01Page = () => {
    const onToggle = (isOn: boolean) => {
        console.log("isOn", isOn);
    };
    return (
        <div>
            <BasicTabs>
                <BasicTabs.Tab label='Tab 1'>
                    <div>Tab 1</div>
                </BasicTabs.Tab>
                <BasicTabs.Tab label='Tab 2'>
                    <div>Tab 2</div>
                </BasicTabs.Tab>
                <BasicTabs.Tab label='Tab 3'>
                    <div>Tab 3</div>
                </BasicTabs.Tab>
            </BasicTabs>
            <CompoundSwitch onToggle={onToggle}>
                <CompoundSwitch.On>Toggle status: On</CompoundSwitch.On>
                <CompoundSwitch.Off>Toggle status: Off</CompoundSwitch.Off>
                <div>
                    <CompoundSwitch.Button />
                </div>
            </CompoundSwitch>
        </div>
    );
};
export default CompoundComponent01Page;
