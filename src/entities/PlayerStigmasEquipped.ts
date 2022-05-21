import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Players } from "./Players";

@Entity("player_stigmas_equipped", { schema: "beritra" })
export class PlayerStigmasEquipped {
  @Column("int", { primary: true, name: "player_id" })
  playerId: number;

  @Column("int", { primary: true, name: "item_id" })
  itemId: number;

  @Column("varchar", { name: "item_name", nullable: true, length: 100 })
  itemName: string | null;

  @ManyToOne(() => Players, (players) => players.playerStigmasEquippeds, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "player_id", referencedColumnName: "id" }])
  player: Players;
}
