import { LegionEmblems } from "./LegionEmblems";
import { LegionHistory } from "./LegionHistory";
import { LegionAnnouncementList } from "./LegionAnnouncementList";
import { LegionMembers } from "./LegionMembers";
export declare class Legions {
    id: number;
    name: string;
    level: number;
    contributionPoints: string;
    deputyPermission: number;
    centurionPermission: number;
    legionaryPermission: number;
    volunteerPermission: number;
    disbandTime: number;
    rankCp: number;
    rankPos: number;
    oldRankPos: number;
    description: string;
    joinType: number;
    minJoinLevel: number;
    territory: number;
    legionEmblems: LegionEmblems;
    legionHistories: LegionHistory[];
    legionAnnouncementLists: LegionAnnouncementList[];
    legionMembers: LegionMembers[];
}
