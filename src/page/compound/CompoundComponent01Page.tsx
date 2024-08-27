import BasicTabs from "@/components/tab/BasicTabs";

const CompoundComponent01Page = () => {
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
        </div>
    );
};
export default CompoundComponent01Page;
