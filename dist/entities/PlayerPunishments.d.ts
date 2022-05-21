import { Players } from "./Players";
export declare class PlayerPunishments {
    playerId: number;
    punishmentType: "PRISON" | "GATHER" | "CHARBAN";
    startTime: number | null;
    duration: number | null;
    reason: string | null;
    player: Players;
}
