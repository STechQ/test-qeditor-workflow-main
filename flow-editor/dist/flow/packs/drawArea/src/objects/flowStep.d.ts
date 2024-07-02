import { IPoint } from "../../../flowInterfaces/editor/shape/IPoint";
import { RoundedRectangle } from "two.js/src/shapes/rounded-rectangle";
import { Circle } from "two.js/src/shapes/circle";
import { FlowObjectBase, MouseDownReturn } from "./flowObjectBase";
import { ObjectManager } from "../managers/objectManager";
import { Vector } from "two.js/src/vector";
import { StageType, ZuiManager } from "../managers/zuiManager";
import { FlowEvents, IFlowStepOptions } from "../../types";
import { FlowConnection } from "./flowConnection";
import { EventHelper } from "../helper/eventHelper";
type GetPositionOptions = {
    type: "self" | "group";
} | {
    type: "input" | "output";
    name: string;
};
export declare class FlowStep extends FlowObjectBase {
    readonly stepName: string;
    private readonly container;
    private readonly name;
    private readonly width;
    private readonly height;
    private readonly text;
    private readonly group;
    private readonly tagContainer;
    private readonly tag;
    private outputs;
    private inputs;
    private inputConns;
    private outputConns;
    private outputsOrdered;
    private inputsOrdered;
    private swimlaneId?;
    readonly type = "step";
    protected readonly stageType: StageType;
    constructor(id: string, stepName: string, surfacePoint: IPoint, options: IFlowStepOptions, objectManager: ObjectManager, zuiManager: ZuiManager, eventHelper: EventHelper<FlowEvents>, stepDescription?: string, tagName?: string);
    private createTag;
    private createTagContainer;
    private createSubTitle;
    private createTitle;
    private createIcon;
    private createBar;
    private createRectangleContainer;
    createCircleContainer(x: number, y: number): Circle;
    get Options(): IFlowStepOptions;
    get SwimlaneId(): string | undefined;
    setSwimlaneId(swimlaneId?: string): void;
    mouseDown(surfacePoint: IPoint): MouseDownReturn;
    protected createSelectionOverlay(): (Circle | RoundedRectangle)[];
    private isStepCircle;
    moveBy(dVector: Vector, surfacePoint: IPoint): void;
    mouseUp(): void;
    protected onDeleted(): void;
    reDraw(): void;
    private reDrawOutConns;
    getPosition(option: GetPositionOptions): Vector;
    closestInput(surfacePoint: IPoint, discardInputs?: Array<string>): {
        input: string;
        distSq: number;
    } | undefined;
    unregisterConnection(conType: "input" | "output", name: string, connection: FlowConnection): void;
    registerConnection(conType: "input" | "output", name: string, connection: FlowConnection): void;
    getConnectionTo(output: string, toStep: FlowStep, toInput: string): FlowConnection | undefined;
    getConnectionsTo(output: string, toStep: FlowStep): Array<FlowConnection>;
    private drawInputs;
    private drawOutputs;
    private drawIOs;
    private afterDraw;
    private colorIO;
    setOutputs(outputs: Array<string>): void;
}
export {};
//# sourceMappingURL=flowStep.d.ts.map