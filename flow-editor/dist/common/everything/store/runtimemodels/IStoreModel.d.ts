import { IVariable, IVariableData } from "../../dataType/runtimemodels/IVariable";
import { IDataEventMapping, IEventMapping, IStoreFunction } from "./IStoreFunction";
export type Store = IStoreModelForService | IStoreModelForWorkflow | IStoreModelForFlow | IStoreModelForUI;
export type IStoreModelBase<TContext extends IStoreContextBase> = {
    context: TContext;
    input: Record<string, IVariable>;
    output: Record<string, IVariable>;
};
export type IStoreModelForService = IStoreModelBase<IStoreContextForService> & {};
export type IStoreModelForWorkflow = IStoreModelBase<IStoreContextForWorkflow> & {};
export type IStoreModelForFlow = IStoreModelBase<IStoreContextForFlow> & {};
export type IStoreModelForUI = IStoreModelBase<IStoreContextForUI> & {
    events?: Array<IStoreFunction<IEventMapping>>;
    dataEvents?: Array<IStoreFunction<IDataEventMapping>>;
};
export type StoreContextKeys = keyof IStoreContextForService | keyof IStoreContextForWorkflow | keyof IStoreContextForFlow | keyof IStoreContextForUI;
export type IStoreContextBase = {
    currentUser?: IVariable;
    vars?: Record<string, IVariable>;
};
export type IStoreContextForService = IStoreContextBase & {};
export type IStoreContextForWorkflow = IStoreContextBase & {
    processInstance?: IVariableData;
    dataInstance?: IVariableData | undefined;
};
export type IStoreContextForFlow = IStoreContextBase & {};
export type IStoreContextForUI = IStoreContextBase & {
    processInstance?: IVariableData;
    dataInstance?: IVariableData | undefined;
};
//# sourceMappingURL=IStoreModel.d.ts.map