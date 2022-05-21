import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Players } from "./Players";

@Entity("player_wardrobe", { schema: "beritra" })
export class PlayerWardrobe {
  @Column("int", { primary: true, name: "player_id" })
  playerId: number;

  @Column("int", { primary: true, name: "item_id" })
  itemId: number;

  @Column("int", { name: "slot" })
  slot: number;

  @Column("int", { name: "reskin_count", default: () => "'0'" })
  reskinCount: number;

  @ManyToOne(() => Players, (players) => players.playerWardrobes, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "player_id", referencedColumnName: "id" }])
  player: Players;
}
