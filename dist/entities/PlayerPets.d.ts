import { Players } from "./Players";
export declare class PlayerPets {
    playerId: number;
    petId: number;
    decoration: number;
    name: string;
    hungryLevel: number;
    feedProgress: number;
    reuseTime: string;
    birthday: Date;
    moodStarted: string;
    counter: number;
    moodCdStarted: string;
    giftCdStarted: string;
    dopings: string | null;
    despawnTime: Date | null;
    expireTime: number;
    player: Players;
}
