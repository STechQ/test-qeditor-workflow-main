/// <reference types="react" />
import { IVMHistory } from "../../../../flowInterfaces/editor/IFlowEditorState";
import { ISelectedSwitchCase, IStepOptions } from "../../../../flowInterfaces/editor/IStepOptions";
import { IInitOptions } from "../../../../flowInterfaces/editor/editors/IFlowEditorProgram";
import { IStepModel } from "../../../../flowInterfaces/runtime/IStepModel";
import { IExpressionData } from "@stechquick/flow-interfaces/runtime";
import { Store } from "../../../../../../common/everything/store/designtimemodels/IStoreModel";
import { ISLA } from "../../../../../../common/everything/workflow/runtimemodels/ISLA";
export interface IConnectionFrom {
    step: string;
    output: string;
}
export interface IConnectionTo {
    step: string;
    input: string;
}
export interface IConnectionInstance {
    from: IConnectionFrom;
    to: IConnectionTo;
}
export interface IStepInstance {
    id: string;
    name: string;
    type: IExpressionData["type"];
    swimlaneId?: string;
    options: IStepOptions;
    propValues: IStepModel["P"];
}
export interface ISwimlaneInstance {
    id: string;
    name: IExpressionData;
}
export type ReactComponent<TProps = Record<string, any>> = (props: TProps) => JSX.Element;
export interface IViewModel {
    stepRepo: Record<string, Record<string, IStepOptions> | undefined>;
    steps: Record<string, IStepInstance | undefined>;
    swimlanes: Record<string, ISwimlaneInstance>;
    connections: Record<string, IConnectionInstance | undefined>;
    selecteds: Array<string>;
    initOptions: IInitOptions;
    componentMap: Map<symbol, ReactComponent>;
    history: IVMHistory;
    store: Store;
    readonly: boolean;
    isWorkFlow?: boolean;
    roles: Array<IExpressionData>;
    name?: string;
    _name?: string;
    selectedSwitchCase?: ISelectedSwitchCase;
    schema: Store;
    priority: number;
    sla: ISLA;
    resetHistory: () => IVMHistory;
}
export declare const IViewModel: unique symbol;
//# sourceMappingURL=IViewModel.d.ts.map