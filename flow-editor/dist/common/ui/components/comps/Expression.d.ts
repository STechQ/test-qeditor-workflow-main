import { FC } from "react";
import "../assets/css/components/expression.css";
import { IExpressionData } from "../../../everything/dataType/runtimemodels/IExpression";
interface IExpressionProps {
    label?: string;
    className?: string;
    types: Array<IExpressionData["type"]>;
    expression: IExpressionData;
    onChange?: (value: IExpressionData) => void;
    onBlur?: (value: IExpressionData) => void;
}
export declare const Expression: FC<IExpressionProps>;
export {};
//# sourceMappingURL=Expression.d.ts.map