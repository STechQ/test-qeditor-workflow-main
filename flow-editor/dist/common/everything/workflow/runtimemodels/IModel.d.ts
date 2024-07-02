import { IEnumModel } from "../../enum/runtimeModels/IEnumModel";
import { IDataTypeModel } from "../../dataType/runtimemodels/IDataTypeModel";
import { IFlowModel } from "@stechquick/flow-interfaces/runtime/IFlowModel";
import { IRestServiceModel } from "../../restService/runtimeModels/IRestServiceModel";
import { IWorkflowModel } from "./IWorkflow";
import { IEnvironmentModel } from "../../dataType/runtimemodels/IEnvironmentModel";
export type IModelBaseFields = {
    id: string;
};
export type IWFModels = IDataTypeModel | IEnumModel | IRestServiceModel | IFlowModel | IWorkflowModel | IEnvironmentModel;
//# sourceMappingURL=IModel.d.ts.map