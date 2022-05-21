import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Players } from "./Players";

@Entity("player_motions", { schema: "beritra" })
export class PlayerMotions {
  @Column("int", { primary: true, name: "player_id" })
  playerId: number;

  @Column("int", { primary: true, name: "motion_id" })
  motionId: number;

  @Column("int", { name: "time", default: () => "'0'" })
  time: number;

  @Column("tinyint", { name: "active", width: 1, default: () => "'0'" })
  active: boolean;

  @ManyToOne(() => Players, (players) => players.playerMotions, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "player_id", referencedColumnName: "id" }])
  player: Players;
}
