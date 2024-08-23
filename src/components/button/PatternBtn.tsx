import { ReactNode } from "react";

import styles from "./PatternBtn.module.scss";

interface IPatternBtnProps {
    color?: string;
    size: "small" | "medium" | "large";
    onClick: () => void;
    children: ReactNode;
}
const PatternBtn = ({ color = "blue", size = "medium", onClick, children }: IPatternBtnProps) => {
    const buttonClasses = `${styles.button} ${styles[color]} ${styles[size]}`;
    return (
        <button className={buttonClasses} onClick={onClick}>
            {children}
        </button>
    );
};
export default PatternBtn;
