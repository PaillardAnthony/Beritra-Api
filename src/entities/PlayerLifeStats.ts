import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { Players } from "./Players";

@Entity("player_life_stats", { schema: "beritra" })
export class PlayerLifeStats {
  @Column("int", { primary: true, name: "player_id" })
  playerId: number;

  @Column("int", { name: "hp", default: () => "'1'" })
  hp: number;

  @Column("int", { name: "mp", default: () => "'1'" })
  mp: number;

  @Column("int", { name: "fp", default: () => "'1'" })
  fp: number;

  @OneToOne(() => Players, (players) => players.playerLifeStats, {
    onDelete: "CASCADE",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "player_id", referencedColumnName: "id" }])
  player: Players;
}
