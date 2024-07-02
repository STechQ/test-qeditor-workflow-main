import { IModelBaseFields } from "../../workflow/runtimemodels/IModel";
import { IDataTypeProperty } from "./IDataTypeModel";
import { IVariable } from "./IVariable";
export interface IEnvironmentModel extends IModelBaseFields, IDataTypeProperty {
    type: "envParam";
    mappings: Record<string, EnvironmentProps>;
}
export type EnvironmentProps = IEnvironmentProp | ConstantProp;
export interface IEnvironmentPropsBase {
    type: 'env' | 'constant';
}
export interface IEnvironmentProp extends IEnvironmentPropsBase {
    global: boolean;
    type: 'env';
    envKey: string;
    mock: string;
}
export type ConstantProp = IApplicationConstant | IGlobalConstant;
export interface IConstantPropBase extends IEnvironmentPropsBase {
    global: boolean;
    type: 'constant';
    constantType: IVariable;
    ttl: number;
    functionId: string;
    functionVersion: string;
}
export interface IApplicationConstant extends IConstantPropBase {
    global: false;
}
export interface IGlobalConstant extends IConstantPropBase {
    global: true;
    db: boolean;
}
//# sourceMappingURL=IEnvironmentModel.d.ts.map