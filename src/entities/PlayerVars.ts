import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Players } from "./Players";

@Entity("player_vars", { schema: "beritra" })
export class PlayerVars {
  @Column("int", { primary: true, name: "player_id" })
  playerId: number;

  @Column("varchar", { primary: true, name: "param", length: 255 })
  param: string;

  @Column("varchar", { name: "value", nullable: true, length: 255 })
  value: string | null;

  @Column("varchar", { name: "time", nullable: true, length: 200 })
  time: string | null;

  @ManyToOne(() => Players, (players) => players.playerVars, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "player_id", referencedColumnName: "id" }])
  player: Players;
}
