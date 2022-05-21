import { Players } from "./Players";
export declare class PlayerRegisteredItems {
    playerId: number;
    itemUniqueId: number;
    itemId: number;
    expireTime: number | null;
    color: number | null;
    colorExpires: number;
    ownerUseCount: number;
    visitorUseCount: number;
    x: number;
    y: number;
    z: number;
    h: number | null;
    area: "NONE" | "INTERIOR" | "EXTERIOR" | "ALL" | "DECOR";
    floor: number;
    player: Players;
}
