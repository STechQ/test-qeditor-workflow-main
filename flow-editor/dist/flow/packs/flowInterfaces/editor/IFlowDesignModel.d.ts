import { Store } from "../../../../common/everything/store/designtimemodels/IStoreModel";
import { ISLA } from "../../../../common/everything/workflow/runtimemodels/ISLA";
import { IExpressionData } from "../runtime";
import { IConnectionDesignModel } from "./IConnectionDesignModel";
import { IStepDesignModel } from "./IStepDesignModel";
import { ISwimlaneDesignModel } from "./ISwimlaneDesignModel";
export interface IFlowDesignModel extends IFlowCopyModel {
    maxID: number;
}
export interface IFlowCopyModel {
    name?: string;
    _name?: string;
    steps: Array<IStepDesignModel>;
    connections: Array<IConnectionDesignModel>;
    swimlanes?: Record<string, ISwimlaneDesignModel>;
    roles?: Array<IExpressionData>;
    store: Store;
    sla?: ISLA;
    priority?: number;
}
//# sourceMappingURL=IFlowDesignModel.d.ts.map