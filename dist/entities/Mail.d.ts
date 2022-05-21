import { Players } from "./Players";
export declare class Mail {
    mailUniqueId: number;
    mailRecipientId: number;
    senderName: string;
    mailTitle: string;
    mailMessage: string;
    unread: number;
    attachedItemId: number;
    attachedKinahCount: string;
    express: number;
    recievedTime: Date;
    attachedApCount: string;
    mailRecipient: Players;
}
