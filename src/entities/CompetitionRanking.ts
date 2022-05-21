import { Column, Entity } from "typeorm";

@Entity("competition_ranking", { schema: "beritra" })
export class CompetitionRanking {
  @Column("int", { name: "player_id" })
  playerId: number;

  @Column("int", { name: "table_id" })
  tableId: number;

  @Column("int", { name: "rank", default: () => "'0'" })
  rank: number;

  @Column("int", { name: "last_rank", default: () => "'0'" })
  lastRank: number;

  @Column("int", { name: "points", default: () => "'0'" })
  points: number;

  @Column("int", { name: "last_points", default: () => "'0'" })
  lastPoints: number;

  @Column("int", { name: "high_points", default: () => "'0'" })
  highPoints: number;

  @Column("int", { name: "low_points", default: () => "'0'" })
  lowPoints: number;

  @Column("int", { name: "position_match", default: () => "'5'" })
  positionMatch: number;
}
