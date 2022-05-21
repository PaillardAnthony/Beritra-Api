import { Inventory } from "./Inventory";
export declare class ItemStones {
    itemUniqueId: number;
    itemId: number;
    slot: number;
    category: number;
    polishNumber: number | null;
    polishCharge: number | null;
    break: Date | null;
    itemUnique: Inventory;
}
