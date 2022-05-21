import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("ingameshop", { schema: "beritra" })
export class Ingameshop {
  @PrimaryGeneratedColumn({ type: "int", name: "object_id" })
  objectId: number;

  @Column("int", { name: "item_id" })
  itemId: number;

  @Column("bigint", { name: "item_count", default: () => "'0'" })
  itemCount: string;

  @Column("bigint", { name: "item_price", default: () => "'0'" })
  itemPrice: string;

  @Column("tinyint", { name: "category", width: 1, default: () => "'0'" })
  category: boolean;

  @Column("tinyint", { name: "sub_category", width: 1, default: () => "'0'" })
  subCategory: boolean;

  @Column("int", { name: "list", default: () => "'0'" })
  list: number;

  @Column("int", { name: "sales_ranking", default: () => "'0'" })
  salesRanking: number;

  @Column("tinyint", { name: "item_type", width: 1, default: () => "'0'" })
  itemType: boolean;

  @Column("tinyint", { name: "gift", width: 1, default: () => "'0'" })
  gift: boolean;

  @Column("varchar", { name: "title_description", length: 255 })
  titleDescription: string;

  @Column("varchar", { name: "description", length: 255 })
  description: string;
}
