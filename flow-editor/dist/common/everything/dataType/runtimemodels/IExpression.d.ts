import { RuntimeMessage } from "@stechquick/flow-interfaces/runtime/StepRuntime";
import { ExpressionDataTypes, SetExpressionDataTypes } from "./types";
export type ISetExpressionData = IExpressionData & {
    type: SetExpressionDataTypes;
};
export type IExpressionData = {
    type: ExpressionDataTypes;
    value: string;
};
type ExpressionGetterReturnType = string | number | boolean | RuntimeMessage | undefined;
export type ExpressionGetter = (expression: IExpressionData, msg: RuntimeMessage) => Array<ExpressionGetterReturnType> | ExpressionGetterReturnType;
export type ExpressionSetter = (expression: ISetExpressionData, value: any, msg: RuntimeMessage) => void;
export type IExpressionDataTypeSelection<T extends IExpressionData["type"]> = Extract<T, T>;
export {};
//# sourceMappingURL=IExpression.d.ts.map