import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { Players } from "./Players";

@Entity("abyss_rank", { schema: "beritra" })
export class AbyssRank {
  @Column("int", { primary: true, name: "player_id" })
  playerId: number;

  @Column("int", { name: "daily_ap" })
  dailyAp: number;

  @Column("int", { name: "daily_gp" })
  dailyGp: number;

  @Column("int", { name: "weekly_ap" })
  weeklyAp: number;

  @Column("int", { name: "weekly_gp" })
  weeklyGp: number;

  @Column("int", { name: "ap" })
  ap: number;

  @Column("int", { name: "gp" })
  gp: number;

  @Column("int", { name: "rank", default: () => "'1'" })
  rank: number;

  @Column("int", { name: "top_ranking" })
  topRanking: number;

  @Column("int", { name: "daily_kill" })
  dailyKill: number;

  @Column("int", { name: "weekly_kill" })
  weeklyKill: number;

  @Column("int", { name: "all_kill", default: () => "'0'" })
  allKill: number;

  @Column("int", { name: "max_rank", default: () => "'1'" })
  maxRank: number;

  @Column("int", { name: "last_kill" })
  lastKill: number;

  @Column("int", { name: "last_ap" })
  lastAp: number;

  @Column("int", { name: "last_gp" })
  lastGp: number;

  @Column("decimal", { name: "last_update", precision: 20, scale: 0 })
  lastUpdate: string;

  @Column("int", { name: "rank_pos", default: () => "'0'" })
  rankPos: number;

  @Column("int", { name: "old_rank_pos", default: () => "'0'" })
  oldRankPos: number;

  @Column("int", { name: "rank_ap", default: () => "'0'" })
  rankAp: number;

  @OneToOne(() => Players, (players) => players.abyssRank, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "player_id", referencedColumnName: "id" }])
  player: Players;
}
