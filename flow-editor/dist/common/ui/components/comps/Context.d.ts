import { FC } from "react";
import { Store } from "../../../everything/store/designtimemodels/IStoreModel";
type IStoreContext = Store["context"];
interface IContextProps {
    dataTypes: Array<{
        ID: string;
        name: string;
    }>;
    workflowDataInstances?: Array<{
        ID: string;
        name: string;
    }>;
    context: IStoreContext;
    schema: Store;
    readonly?: boolean;
    onChange: (context: IStoreContext) => void;
}
export declare const Context: FC<IContextProps>;
export {};
//# sourceMappingURL=Context.d.ts.map