import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Players } from "./Players";

@Entity("player_registered_items", { schema: "beritra" })
export class PlayerRegisteredItems {
  @Column("int", { primary: true, name: "player_id" })
  playerId: number;

  @Column("int", { primary: true, name: "item_unique_id" })
  itemUniqueId: number;

  @Column("int", { primary: true, name: "item_id" })
  itemId: number;

  @Column("int", { name: "expire_time", nullable: true })
  expireTime: number | null;

  @Column("int", { name: "color", nullable: true })
  color: number | null;

  @Column("int", { name: "color_expires", default: () => "'0'" })
  colorExpires: number;

  @Column("int", { name: "owner_use_count", default: () => "'0'" })
  ownerUseCount: number;

  @Column("int", { name: "visitor_use_count", default: () => "'0'" })
  visitorUseCount: number;

  @Column("float", { name: "x", precision: 12, default: () => "'0'" })
  x: number;

  @Column("float", { name: "y", precision: 12, default: () => "'0'" })
  y: number;

  @Column("float", { name: "z", precision: 12, default: () => "'0'" })
  z: number;

  @Column("smallint", { name: "h", nullable: true })
  h: number | null;

  @Column("enum", {
    name: "area",
    enum: ["NONE", "INTERIOR", "EXTERIOR", "ALL", "DECOR"],
    default: () => "'NONE'",
  })
  area: "NONE" | "INTERIOR" | "EXTERIOR" | "ALL" | "DECOR";

  @Column("tinyint", { name: "floor", default: () => "'0'" })
  floor: number;

  @ManyToOne(() => Players, (players) => players.playerRegisteredItems, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "player_id", referencedColumnName: "id" }])
  player: Players;
}
