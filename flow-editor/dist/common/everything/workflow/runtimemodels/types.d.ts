export declare const WorkflowModelTypeTag = "workflow";
export type WorkflowModelType = typeof WorkflowModelTypeTag;
export type DateTime = string;
export declare const ActionTypes: {
    start: string;
    complete: string;
    claim: string;
    assignToUser: string;
    assignToUnit: string;
    save: string;
    function: string;
    trigger: string;
};
export type ActionType = keyof typeof ActionTypes;
export type CustomType = string;
export declare const UnboundActions: Array<ActionType>;
export declare const Created = "Created";
export declare const Updated = "Updated";
export declare const TaskCompleted = "Task-Completed";
export declare const Finished = "Finished";
export type NotificationEventTypes = typeof Created | typeof Updated | typeof TaskCompleted | typeof Finished;
//# sourceMappingURL=types.d.ts.map