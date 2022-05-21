import { Items } from "./Items";
export declare class ShopCategory {
    id: number;
    name: string;
    parentId: number;
    createdAt: Date | null;
    updatedAt: Date | null;
    items: Items[];
}
