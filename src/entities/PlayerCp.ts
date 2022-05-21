import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Players } from "./Players";

@Entity("player_cp", { schema: "beritra" })
export class PlayerCp {
  @Column("int", { primary: true, name: "player_id" })
  playerId: number;

  @Column("int", { primary: true, name: "slot" })
  slot: number;

  @Column("int", { name: "point" })
  point: number;

  @ManyToOne(() => Players, (players) => players.playerCps, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "player_id", referencedColumnName: "id" }])
  player: Players;
}
