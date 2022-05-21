export declare class Petitions {
    id: string;
    playerId: number;
    type: number;
    title: string;
    message: string;
    addData: string | null;
    time: string;
    status: "PENDING" | "IN_PROGRESS" | "REPLIED";
}
