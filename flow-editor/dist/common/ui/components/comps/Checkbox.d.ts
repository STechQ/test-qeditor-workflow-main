import { ChangeEvent, FC } from "react";
import "../assets/css/components/checkbox.css";
interface ICheckboxProps {
    label?: string;
    className?: string;
    disabled?: boolean;
    checked: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export declare const Checkbox: FC<ICheckboxProps>;
export {};
//# sourceMappingURL=Checkbox.d.ts.map