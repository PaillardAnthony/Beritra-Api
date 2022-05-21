import { Column, Entity } from "typeorm";

@Entity("aion_itemlist", { schema: "beritra" })
export class AionItemlist {
  @Column("int", { primary: true, name: "item_id", unsigned: true })
  itemId: number;

  @Column("varchar", { name: "item_name", nullable: true, length: 100 })
  itemName: string | null;

  @Column("varchar", { name: "item_quality", nullable: true, length: 25 })
  itemQuality: string | null;

  @Column("varchar", { name: "item_icon", nullable: true, length: 50 })
  itemIcon: string | null;

  @Column("int", { name: "updated", default: () => "'0'" })
  updated: number;
}
