import { ShopCategory } from "./ShopCategory";
export declare class Items {
    id: number;
    categoryId: number;
    itemCodeId: string;
    itemName: string;
    itemLevel: number;
    itemQuality: "junk" | "common" | "rare" | "legend" | "unique" | "epic" | "relic" | "ancient" | "finality" | "mythic";
    itemIcon: string;
    itemPrice: string;
    itemQuantity: number;
    purchased: number;
    itemType: "item" | "pet" | "gathersource";
    createdAt: Date | null;
    updatedAt: Date | null;
    category: ShopCategory;
}
