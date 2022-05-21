import {Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { Players } from "./Players";

@Index("main", ["playerId", "order"], { unique: true })
@Entity("player_macrosses", { schema: "beritra" })
export class PlayerMacrosses {

  @PrimaryGeneratedColumn()
  id: number;

  @Column("int", { name: "player_id" })
  playerId: number;

  @Column("int", { name: "order" })
  order: number;

  @Column("text", { name: "macro" })
  macro: string;

  @ManyToOne(() => Players, (players) => players.playerMacrosses, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "player_id", referencedColumnName: "id" }])
  player: Players;
}
