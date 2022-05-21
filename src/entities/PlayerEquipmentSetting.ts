import { Column, Entity } from "typeorm";

@Entity("player_equipment_setting", { schema: "beritra" })
export class PlayerEquipmentSetting {
  @Column("int", { primary: true, name: "player_id" })
  playerId: number;

  @Column("int", { primary: true, name: "slot" })
  slot: number;

  @Column("tinyint", { name: "display", default: () => "'0'" })
  display: number;

  @Column("int", { name: "m_hand", default: () => "'0'" })
  mHand: number;

  @Column("int", { name: "s_hand", default: () => "'0'" })
  sHand: number;

  @Column("int", { name: "helmet", default: () => "'0'" })
  helmet: number;

  @Column("int", { name: "torso", default: () => "'0'" })
  torso: number;

  @Column("int", { name: "glove", default: () => "'0'" })
  glove: number;

  @Column("int", { name: "boots", default: () => "'0'" })
  boots: number;

  @Column("int", { name: "earrings_left", default: () => "'0'" })
  earringsLeft: number;

  @Column("int", { name: "earrings_right", default: () => "'0'" })
  earringsRight: number;

  @Column("int", { name: "ring_left", default: () => "'0'" })
  ringLeft: number;

  @Column("int", { name: "ring_right", default: () => "'0'" })
  ringRight: number;

  @Column("int", { name: "necklace", default: () => "'0'" })
  necklace: number;

  @Column("int", { name: "shoulder", default: () => "'0'" })
  shoulder: number;

  @Column("int", { name: "pants", default: () => "'0'" })
  pants: number;

  @Column("int", { name: "powershard_left", default: () => "'0'" })
  powershardLeft: number;

  @Column("int", { name: "powershard_right", default: () => "'0'" })
  powershardRight: number;

  @Column("int", { name: "wings", default: () => "'0'" })
  wings: number;

  @Column("int", { name: "waist", default: () => "'0'" })
  waist: number;

  @Column("int", { name: "m_off_hand", default: () => "'0'" })
  mOffHand: number;

  @Column("int", { name: "s_off_hand", default: () => "'0'" })
  sOffHand: number;

  @Column("int", { name: "plume", default: () => "'0'" })
  plume: number;

  @Column("int", { name: "bracelet", default: () => "'0'" })
  bracelet: number;
}
