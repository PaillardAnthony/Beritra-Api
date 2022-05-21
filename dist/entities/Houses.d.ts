/// <reference types="node" />
import { HouseBids } from "./HouseBids";
import { HouseScripts } from "./HouseScripts";
export declare class Houses {
    id: number;
    playerId: number;
    buildingId: number;
    address: number;
    acquireTime: Date;
    settings: number;
    status: "ACTIVE" | "SELL_WAIT" | "INACTIVE" | "NOSALE";
    feePaid: boolean;
    nextPay: Date | null;
    sellStarted: Date | null;
    signNotice: Buffer | null;
    houseBids: HouseBids[];
    houseScripts: HouseScripts[];
}
