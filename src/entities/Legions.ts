import { Column, Entity, Index, OneToMany, OneToOne } from "typeorm";
import { LegionEmblems } from "./LegionEmblems";
import { LegionHistory } from "./LegionHistory";
import { LegionAnnouncementList } from "./LegionAnnouncementList";
import { LegionMembers } from "./LegionMembers";

@Index("name_unique", ["name"], { unique: true })
@Entity("legions", { schema: "beritra" })
export class Legions {
  @Column("int", { primary: true, name: "id" })
  id: number;

  @Column("varchar", { name: "name", unique: true, length: 32 })
  name: string;

  @Column("int", { name: "level", default: () => "'1'" })
  level: number;

  @Column("bigint", { name: "contribution_points", default: () => "'0'" })
  contributionPoints: string;

  @Column("int", { name: "deputy_permission", default: () => "'7692'" })
  deputyPermission: number;

  @Column("int", { name: "centurion_permission", default: () => "'7176'" })
  centurionPermission: number;

  @Column("int", { name: "legionary_permission", default: () => "'6144'" })
  legionaryPermission: number;

  @Column("int", { name: "volunteer_permission", default: () => "'2048'" })
  volunteerPermission: number;

  @Column("int", { name: "disband_time", default: () => "'0'" })
  disbandTime: number;

  @Column("int", { name: "rank_cp", default: () => "'0'" })
  rankCp: number;

  @Column("int", { name: "rank_pos", default: () => "'0'" })
  rankPos: number;

  @Column("int", { name: "old_rank_pos", default: () => "'0'" })
  oldRankPos: number;

  @Column("varchar", { name: "description", length: 255, default: () => "''" })
  description: string;

  @Column("int", { name: "joinType", default: () => "'0'" })
  joinType: number;

  @Column("int", { name: "minJoinLevel", default: () => "'0'" })
  minJoinLevel: number;

  @Column("int", { name: "territory", default: () => "'0'" })
  territory: number;

  @OneToOne(() => LegionEmblems, (legionEmblems) => legionEmblems.legion)
  legionEmblems: LegionEmblems;

  @OneToMany(() => LegionHistory, (legionHistory) => legionHistory.legion)
  legionHistories: LegionHistory[];

  @OneToMany(
    () => LegionAnnouncementList,
    (legionAnnouncementList) => legionAnnouncementList.legion
  )
  legionAnnouncementLists: LegionAnnouncementList[];

  @OneToMany(() => LegionMembers, (legionMembers) => legionMembers.legion)
  legionMembers: LegionMembers[];
}
