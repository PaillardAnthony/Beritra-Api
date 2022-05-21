import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Players } from "./Players";

@Entity("event_items", { schema: "beritra" })
export class EventItems {
  @Column("int", { primary: true, name: "player_id" })
  playerId: number;

  @Column("int", { primary: true, name: "item_id" })
  itemId: number;

  @Column("int", { name: "counts", unsigned: true })
  counts: number;

  @ManyToOne(() => Players, (players) => players.eventItems, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "player_id", referencedColumnName: "id" }])
  player: Players;
}
