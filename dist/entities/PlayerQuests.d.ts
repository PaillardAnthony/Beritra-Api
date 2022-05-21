import { Players } from "./Players";
export declare class PlayerQuests {
    playerId: number;
    questId: number;
    status: string;
    questVars: number;
    completeCount: number;
    completeTime: Date | null;
    nextRepeatTime: Date | null;
    reward: number | null;
    player: Players;
}
