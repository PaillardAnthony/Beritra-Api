import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { Players } from "./Players";

@Entity("player_bind_point", { schema: "beritra" })
export class PlayerBindPoint {
  @Column("int", { primary: true, name: "player_id" })
  playerId: number;

  @Column("int", { name: "map_id" })
  mapId: number;

  @Column("float", { name: "x", precision: 12 })
  x: number;

  @Column("float", { name: "y", precision: 12 })
  y: number;

  @Column("float", { name: "z", precision: 12 })
  z: number;

  @Column("int", { name: "heading" })
  heading: number;

  @OneToOne(() => Players, (players) => players.playerBindPoint, {
    onDelete: "CASCADE",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "player_id", referencedColumnName: "id" }])
  player: Players;
}
