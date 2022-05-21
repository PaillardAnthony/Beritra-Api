import { Players } from "./Players";
import { Legions } from "./Legions";
export declare class LegionMembers {
    legionId: number;
    playerId: number;
    nickname: string;
    rank: "BRIGADE_GENERAL" | "CENTURION" | "LEGIONARY" | "DEPUTY" | "VOLUNTEER";
    selfintro: string | null;
    challengeScore: number;
    player: Players;
    legion: Legions;
}
