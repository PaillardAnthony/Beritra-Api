import { Column, Entity } from "typeorm";

@Entity("player_transform", { schema: "beritra" })
export class PlayerTransform {
  @Column("int", { name: "player_id" })
  playerId: number;

  @Column("int", { name: "panel_id", default: () => "'0'" })
  panelId: number;

  @Column("int", { name: "item_id", default: () => "'0'" })
  itemId: number;
}
