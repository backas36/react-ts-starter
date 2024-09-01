import Accordion from "@/components/accordion/Accordion";
import CompoundSwitch from "@/components/switch/CompoundSwitch";
import BasicTabs from "@/components/tab/BasicTabs";

const accordionData = [
    {
        title: "123",
        content: (
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia iure voluptatem aperiam blanditiis
                perferendis eum consequatur repellat repellendus officia est.
            </p>
        ),
    },
    {
        title: "456",
        content: (
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia iure voluptatem aperiam blanditiis
                perferendis eum consequatur repellat repellendus officia est.
            </p>
        ),
    },
    {
        title: "789",
        content: (
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia iure voluptatem aperiam blanditiis
                perferendis eum consequatur repellat repellendus officia est.
            </p>
        ),
    },
];
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
            <div className='mt-10'>
                <Accordion multipleMode>
                    {accordionData.map((row, idx) => {
                        return (
                            <Accordion.Item key={idx}>
                                <Accordion.Title idx={idx}>{row.title}</Accordion.Title>
                                <Accordion.Content idx={idx}>{row.content}</Accordion.Content>
                            </Accordion.Item>
                        );
                    })}
                </Accordion>
            </div>
        </div>
    );
};
export default CompoundComponent01Page;
