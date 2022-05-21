import { Players } from "./Players";
export declare class Broker {
    id: number;
    itemPointer: number;
    itemId: number;
    itemCount: string;
    itemCreator: string | null;
    seller: string | null;
    price: string;
    brokerRace: "ELYOS" | "ASMODIAN";
    expireTime: Date;
    settleTime: Date;
    sellerId: number;
    isSold: boolean;
    isSettled: boolean;
    isSplitsell: boolean;
    seller_2: Players;
}
