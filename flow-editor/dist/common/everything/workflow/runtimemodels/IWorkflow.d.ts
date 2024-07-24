import { IAction } from "../runtimeObjects/IAction";
import { IFlowModel, IPropObject, IStepFrom, IStepModel, IStepTo } from "@stechquick/flow-interfaces/runtime";
import { IStoreMapping } from "../../store/runtimemodels/IStoreMapping";
import { IStoreModelForWorkflow } from "../../store/runtimemodels/IStoreModel";
import { ISwitchProps } from "../../flow/runtimeModels/ISwitch";
import { IExpressionData } from "../../dataType/runtimemodels/IExpression";
import { IFlowModelBase } from "@stechquick/flow-interfaces/runtime/IFlowModel";
import { ISLA } from "./ISLA";
export type WorkflowStepName = "start" | "humantask" | "subFlow" | "flow" | "switch" | "end";
export declare const NamedFunctions: {
    getUser: string;
    notify: string;
};
export type IWorkflowModelNamedFunctions = Record<keyof typeof NamedFunctions, string>;
export interface IWorkflowModel extends IFlowModelBase {
    type: "workflow";
    namedFunctions?: IWorkflowModelNamedFunctions;
    name: string;
    _name: string;
    desc: string;
    swimlanes: Record<string, IExpressionData>;
    priority: number;
    sla: ISLA;
    roles: Record<string, IExpressionData>;
    steps: Record<string, IWFStepModel>;
    startSteps: Array<IWFStepTo>;
    store: IStoreModelForWorkflow;
}
export interface IWFStepTo extends IStepTo {
}
export interface IWFStepFrom extends IStepFrom {
}
export interface IWFStepModel extends IStepModel {
    P?: IWFPropObject;
    S?: string;
}
export type IWFPropObject = IPropObject & {
    stepId: string;
    name?: string;
    version?: string;
    swimlane: string;
    props: IWFStepInlineFlowModelProps | IWFStepProps | ISwitchProps;
};
export type StepFlowModelPropType = IWFStepInlineFlowModelProps | IExecuteFlowByMapping;
export type IWFStepInlineFlowModelProps = {
    type: 'inline';
    inline: IFlowModel;
    mapping?: IStoreMapping;
};
export type IExecuteFlowByMapping = {
    type: "referenced";
    id: string;
    mapping?: IStoreMapping;
};
export type IWFStepProps = {
    type: "humanStartEnd";
    label?: IExpressionData;
    forms: Array<IForm>;
    actions: Array<IAction>;
    priority?: number;
    sla?: ISLA;
};
export type IForm = {
    id: string;
    roles: Array<string>;
    readonly?: boolean;
};
//# sourceMappingURL=IWorkflow.d.ts.map