import { IStoreModelForService as IStoreModelForServiceRuntime, IStoreContextForService as IStoreContextForServiceRuntime, IStoreModelForWorkflow as IStoreModelForWorkflowRuntime, IStoreContextForWorkflow as IStoreContextForWorkflowRuntime, IStoreModelForFlow as IStoreModelForFlowRuntime, IStoreContextForFlow as IStoreContextForFlowRuntime, IStoreModelForUI as IStoreModelForUIRuntime, IStoreContextForUI as IStoreContextForUIRuntime } from "../runtimemodels/IStoreModel";
export type Store = IStoreModelForService | IStoreModelForWorkflow | IStoreModelForFlow | IStoreModelForUI;
type IStoreModelPropsAddition = {
    props: IStoreProps;
};
export type IStoreModelForUI = IStoreModelForUIRuntime & IStoreModelPropsAddition & {};
export type IStoreModelForFlow = IStoreModelForFlowRuntime & IStoreModelPropsAddition & {};
export type IStoreModelForWorkflowInlineFlow = IStoreModelForFlow & {};
export type IStoreModelForWorkflow = IStoreModelForWorkflowRuntime & IStoreModelPropsAddition & {};
export type IStoreModelForService = IStoreModelForServiceRuntime & IStoreModelPropsAddition & {};
export type IStoreContextForService = IStoreContextForServiceRuntime & {};
export type IStoreContextForWorkflow = IStoreContextForWorkflowRuntime & {};
export type IStoreContextForFlow = IStoreContextForFlowRuntime & {};
export type IStoreContextForUI = IStoreContextForUIRuntime & {};
export type IStoreProps = {
    insert: Array<string>;
};
export {};
//# sourceMappingURL=IStoreModel.d.ts.map