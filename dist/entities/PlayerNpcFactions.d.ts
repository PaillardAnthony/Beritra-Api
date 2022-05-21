import { Players } from "./Players";
export declare class PlayerNpcFactions {
    playerId: number;
    factionId: number;
    active: boolean;
    time: number;
    state: "NOTING" | "START" | "COMPLETE";
    questId: number;
    player: Players;
}
