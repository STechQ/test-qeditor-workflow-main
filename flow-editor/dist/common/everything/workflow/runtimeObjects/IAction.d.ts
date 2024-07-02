import { IExpressionData } from "../../dataType/runtimemodels/IExpression";
import { ActionType, CustomType } from "../runtimemodels/types";
export type IAction = {
    actionType: ActionType;
    customType: CustomType;
    label: string;
    roles: Array<string>;
    props?: IActionProp;
};
export type IActionProp = {
    uniqueKeys?: Array<string>;
    userBound?: boolean;
    userProp?: IExpressionData;
    unitProp?: IExpressionData;
};
//# sourceMappingURL=IAction.d.ts.map