import useEffectOnMounted from "@/hooks/useEffectOnMounted";
import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from "react";
import TSwitch from "./TSwitch";
interface IToggleCtx {
    isOn: boolean;
    toggle: () => void;
}
const ToggleContext = createContext<IToggleCtx>({
    isOn: false,
    toggle: () => {},
});

const Toggle = ({ children, onToggle }: { children: ReactNode; onToggle: (isOn: boolean) => void }) => {
    const [isOn, setIsOn] = useState(false);
    const toggle = useCallback(() => {
        setIsOn((prev) => !prev);
    }, []);

    useEffectOnMounted(() => onToggle(isOn), [isOn]);

    const value = useMemo(() => ({ isOn, toggle }), [isOn, toggle]);
    return <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>;
};

const On = ({ children }: { children: ReactNode }) => {
    const { isOn } = useToggleContext();
    return isOn ? children : null;
};

const Off = ({ children }: { children: ReactNode }) => {
    const { isOn } = useToggleContext();
    return isOn ? null : children;
};

const Button = () => {
    const { isOn, toggle } = useToggleContext();
    return <TSwitch checked={isOn} onChange={toggle} label='Toggle Switch' />;
};

const useToggleContext = () => {
    const context = useContext(ToggleContext);
    if (!context) {
        throw new Error(`Toggle compound component cannot be rendered outside the Toggle component`);
    }
    return context;
};

Toggle.On = On;
Toggle.Off = Off;
Toggle.Button = Button;

export default Toggle;
