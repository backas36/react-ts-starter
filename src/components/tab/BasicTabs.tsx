import { Children, isValidElement, useState } from "react";

interface IProps {
    children: React.ReactNode;
}

interface IBasicTap {
    label: string;
    children: React.ReactNode;
}
const BasicTab = ({ children }: IBasicTap) => {
    return <>{children}</>;
};

const BasicTabs = ({ children }: IProps) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className='flex flex-col'>
            <div className='flex border-b'>
                {Children.map(children, (child, index) => {
                    if (isValidElement(child)) {
                        return (
                            <button
                                key={index}
                                className={`px-4 py-2 font-medium ${
                                    activeTab === index
                                        ? "border-b-2 border-blue-600 text-blue-600"
                                        : "text-gray-500 hover:text-gray-700"
                                }`}
                                onClick={() => setActiveTab(index)}
                            >
                                {child.props.label}
                            </button>
                        );
                    }
                })}
            </div>
            <div className='p-4'>
                {Children.map(children, (child, index) => {
                    if (index === activeTab) {
                        return <>{child}</>;
                    }
                })}
            </div>
        </div>
    );
};

BasicTabs.Tab = BasicTab;

export default BasicTabs;
