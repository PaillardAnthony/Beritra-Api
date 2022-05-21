import { Column, Entity, Index, OneToMany } from "typeorm";
import { ItemStones } from "./ItemStones";

@Index("item_owner", ["itemOwner"], {})
@Index("item_location", ["itemLocation"], {})
@Index("is_equiped", ["isEquiped"], {})
@Entity("inventory", { schema: "beritra" })
export class Inventory {
  @Column("int", { primary: true, name: "item_unique_id" })
  itemUniqueId: number;

  @Column("int", { name: "item_id" })
  itemId: number;

  @Column("bigint", { name: "item_count", default: () => "'0'" })
  itemCount: string;

  @Column("int", { name: "item_color", default: () => "'0'" })
  itemColor: number;

  @Column("int", { name: "color_expires", nullable: true })
  colorExpires: number | null;

  @Column("int", { name: "item_owner" })
  itemOwner: number;

  @Column("varchar", { name: "item_creator", nullable: true, length: 50 })
  itemCreator: string | null;

  @Column("timestamp", {
    name: "itemCreationTime",
    default: () => "'2013-01-01 11:00:01'",
  })
  itemCreationTime: Date;

  @Column("int", { name: "expire_time", default: () => "'0'" })
  expireTime: number;

  @Column("tinyint", { name: "is_equiped", width: 1, default: () => "'0'" })
  isEquiped: boolean;

  @Column("tinyint", { name: "is_soul_bound", width: 1, default: () => "'0'" })
  isSoulBound: boolean;

  @Column("bigint", { name: "slot", default: () => "'0'" })
  slot: string;

  @Column("tinyint", {
    name: "item_location",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  itemLocation: boolean | null;

  @Column("tinyint", {
    name: "enchant",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  enchant: boolean | null;

  @Column("int", { name: "enchant_bonus", default: () => "'0'" })
  enchantBonus: number;

  @Column("int", { name: "item_skin", default: () => "'0'" })
  itemSkin: number;

  @Column("int", { name: "fusioned_item", default: () => "'0'" })
  fusionedItem: number;

  @Column("int", { name: "optional_socket", default: () => "'0'" })
  optionalSocket: number;

  @Column("int", { name: "optional_fusion_socket", default: () => "'0'" })
  optionalFusionSocket: number;

  @Column("int", { name: "activation_count", default: () => "'0'" })
  activationCount: number;

  @Column("mediumint", { name: "charge", default: () => "'0'" })
  charge: number;

  @Column("smallint", { name: "rnd_bonus", nullable: true })
  rndBonus: number | null;

  @Column("smallint", { name: "rnd_count", default: () => "'0'" })
  rndCount: number;

  @Column("smallint", { name: "wrappable_count", default: () => "'0'" })
  wrappableCount: number;

  @Column("tinyint", { name: "is_packed", width: 1, default: () => "'0'" })
  isPacked: boolean;

  @Column("smallint", { name: "tempering_level", default: () => "'0'" })
  temperingLevel: number;

  @Column("tinyint", { name: "is_topped", width: 1, default: () => "'0'" })
  isTopped: boolean;

  @Column("int", { name: "strengthen_skill", default: () => "'0'" })
  strengthenSkill: number;

  @Column("int", { name: "skin_skill", nullable: true, default: () => "'0'" })
  skinSkill: number | null;

  @Column("tinyint", { name: "luna_reskin", width: 1, default: () => "'0'" })
  lunaReskin: boolean;

  @Column("int", { name: "reduction_level", default: () => "'0'" })
  reductionLevel: number;

  @Column("int", { name: "is_seal", default: () => "'0'" })
  isSeal: number;

  @Column("tinyint", {
    name: "isEnhance",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  isEnhance: boolean | null;

  @Column("int", { name: "enhanceSkillId", default: () => "'0'" })
  enhanceSkillId: number;

  @Column("int", { name: "enhanceSkillEnchant", default: () => "'0'" })
  enhanceSkillEnchant: number;

  @OneToMany(() => ItemStones, (itemStones) => itemStones.itemUnique)
  itemStones: ItemStones[];
}
