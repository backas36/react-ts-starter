import clsx, { ClassValue } from "clsx";
import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from "react";

interface IAccordionCtx {
    activeItems: number[];
    onClick: (idx: number) => void;
}

const AccordionContext = createContext<IAccordionCtx | undefined>(undefined);

const Accordion = ({
    children,
    customTClass,
    multipleMode = false,
}: {
    children: ReactNode;
    customTClass?: ClassValue;
    multipleMode?: boolean;
}) => {
    const [activeItems, setActiveItems] = useState<number[]>([]);
    const onClick = useCallback(
        (idx: number) => {
            setActiveItems((prevItems) => {
                if (prevItems.includes(idx)) {
                    return multipleMode ? prevItems.filter((index) => index !== idx) : [];
                }
                return multipleMode ? [...prevItems, idx] : [idx];
            });
        },
        [multipleMode]
    );

    const value = useMemo(() => ({ activeItems, onClick }), [activeItems, onClick]);
    return (
        <AccordionContext.Provider value={value}>
            <div className={clsx("border border-gray-300", customTClass)}>{children}</div>
        </AccordionContext.Provider>
    );
};

const useAccordionContext = () => {
    const context = useContext(AccordionContext);
    if (!context) {
        throw new Error(`cannot be rendered outside the Accordion component`);
    }
    return context;
};

const Item = ({ children }: { children: ReactNode }) => {
    return <div className='mb-2 rounded-lg border border-gray-200'>{children}</div>;
};

const Title = ({ children, idx }: { children: ReactNode; idx: number }) => {
    const { onClick, activeItems } = useAccordionContext();
    const isActive = activeItems.includes(idx);

    return (
        <button
            className='flex w-full items-center justify-between bg-gray-100 p-4 text-left hover:bg-gray-200 focus:outline-none'
            onClick={() => onClick(idx)}
        >
            <span className='font-medium'>{children}</span>
            <span className={`transform transition-transform duration-200 ${isActive ? "rotate-180" : ""}`}>▼</span>
        </button>
    );
};
const Content = ({ children, idx }: { children: ReactNode; idx: number }) => {
    const { activeItems } = useAccordionContext();

    return activeItems?.includes(idx) && <div className='bg-white p-4'>{children}</div>;
};

Accordion.Item = Item;
Accordion.Title = Title;
Accordion.Content = Content;

export default Accordion;
