export declare class News {
    id: number;
    accountId: number;
    categoryId: number;
    title: string;
    content: string;
    slug: string;
    image: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    newsPosition: "big_left" | "small_right";
}
