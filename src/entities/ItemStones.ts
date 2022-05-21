import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Inventory } from "./Inventory";

@Entity("item_stones", { schema: "beritra" })
export class ItemStones {
  @Column("int", { primary: true, name: "item_unique_id" })
  itemUniqueId: number;

  @Column("int", { name: "item_id" })
  itemId: number;

  @Column("int", { primary: true, name: "slot" })
  slot: number;

  @Column("int", { primary: true, name: "category", default: () => "'0'" })
  category: number;

  @Column("int", { name: "polishNumber", nullable: true, default: () => "'0'" })
  polishNumber: number | null;

  @Column("int", { name: "polishCharge", nullable: true, default: () => "'0'" })
  polishCharge: number | null;

  @Column("timestamp", { name: "break", nullable: true })
  break: Date | null;

  @ManyToOne(() => Inventory, (inventory) => inventory.itemStones, {
    onDelete: "CASCADE",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([
    { name: "item_unique_id", referencedColumnName: "itemUniqueId" },
  ])
  itemUnique: Inventory;
}
