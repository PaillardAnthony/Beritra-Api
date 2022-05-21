import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ShopCategory } from "./ShopCategory";

@Index("items_category_id_foreign", ["categoryId"], {})
@Entity("items", { schema: "beritra" })
export class Items {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "category_id", unsigned: true })
  categoryId: number;

  @Column("varchar", { name: "item_code_id", length: 255 })
  itemCodeId: string;

  @Column("varchar", { name: "item_name", length: 255 })
  itemName: string;

  @Column("int", { name: "item_level", default: () => "'0'" })
  itemLevel: number;

  @Column("enum", {
    name: "item_quality",
    enum: [
      "junk",
      "common",
      "rare",
      "legend",
      "unique",
      "epic",
      "relic",
      "ancient",
      "finality",
      "mythic",
    ],
  })
  itemQuality:
    | "junk"
    | "common"
    | "rare"
    | "legend"
    | "unique"
    | "epic"
    | "relic"
    | "ancient"
    | "finality"
    | "mythic";

  @Column("varchar", { name: "item_icon", length: 255 })
  itemIcon: string;

  @Column("decimal", { name: "item_price", precision: 8, scale: 2 })
  itemPrice: string;

  @Column("int", { name: "item_quantity" })
  itemQuantity: number;

  @Column("int", { name: "purchased" })
  purchased: number;

  @Column("enum", { name: "item_type", enum: ["item", "pet", "gathersource"] })
  itemType: "item" | "pet" | "gathersource";

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => ShopCategory, (shopCategory) => shopCategory.items, {
    onDelete: "CASCADE",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "category_id", referencedColumnName: "id" }])
  category: ShopCategory;
}
