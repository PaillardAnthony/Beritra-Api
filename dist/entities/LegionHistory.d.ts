import { Legions } from "./Legions";
export declare class LegionHistory {
    id: number;
    legionId: number;
    date: Date;
    historyType: "CREATE" | "JOIN" | "KICK" | "APPOINTED" | "EMBLEM_REGISTER" | "EMBLEM_MODIFIED" | "ITEM_DEPOSIT" | "ITEM_WITHDRAW" | "KINAH_DEPOSIT" | "KINAH_WITHDRAW" | "LEVEL_UP";
    name: string;
    tabId: number;
    description: string;
    legion: Legions;
}
