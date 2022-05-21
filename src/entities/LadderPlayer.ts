import { Column, Entity } from "typeorm";

@Entity("ladder_player", { schema: "beritra" })
export class LadderPlayer {
  @Column("int", { primary: true, name: "player_id" })
  playerId: number;

  @Column("int", { name: "rating", nullable: true, default: () => "'1000'" })
  rating: number | null;

  @Column("int", { name: "wins", nullable: true })
  wins: number | null;

  @Column("int", { name: "losses", nullable: true })
  losses: number | null;

  @Column("int", { name: "leaves", nullable: true })
  leaves: number | null;

  @Column("int", { name: "rank", default: () => "'-1'" })
  rank: number;

  @Column("int", { name: "last_rank", default: () => "'-1'" })
  lastRank: number;

  @Column("timestamp", { name: "last_update", nullable: true })
  lastUpdate: Date | null;
}
