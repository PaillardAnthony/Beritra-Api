/// <reference types="node" />
import { Legions } from "./Legions";
export declare class LegionEmblems {
    legionId: number;
    emblemId: number;
    colorR: number;
    colorG: number;
    colorB: number;
    emblemType: "DEFAULT" | "CUSTOM";
    emblemData: Buffer | null;
    legion: Legions;
}
