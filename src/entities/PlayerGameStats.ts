import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { Players } from "./Players";

@Entity("player_game_stats", { schema: "beritra" })
export class PlayerGameStats {
  @Column("int", { primary: true, name: "player_id" })
  playerId: number;

  @Column("int", { name: "defense_physic", default: () => "'1'" })
  defensePhysic: number;

  @Column("int", { name: "block", default: () => "'1'" })
  block: number;

  @Column("int", { name: "parry", default: () => "'1'" })
  parry: number;

  @Column("int", { name: "magical_critical", default: () => "'1'" })
  magicalCritical: number;

  @Column("int", { name: "evasion", default: () => "'1'" })
  evasion: number;

  @Column("int", { name: "precision", default: () => "'1'" })
  precision: number;

  @Column("int", { name: "attack", default: () => "'1'" })
  attack: number;

  @Column("int", { name: "magical_precision", default: () => "'1'" })
  magicalPrecision: number;

  @Column("int", { name: "attack_speed", default: () => "'1'" })
  attackSpeed: number;

  @Column("int", { name: "magical_resist", default: () => "'1'" })
  magicalResist: number;

  @Column("int", { name: "magical_attack", default: () => "'1'" })
  magicalAttack: number;

  @Column("int", { name: "main_hand_magical_attack", default: () => "'1'" })
  mainHandMagicalAttack: number;

  @Column("int", { name: "off_hand_magical_attack", default: () => "'1'" })
  offHandMagicalAttack: number;

  @Column("int", { name: "physical_critical", default: () => "'1'" })
  physicalCritical: number;

  @Column("int", { name: "attack_range", default: () => "'1'" })
  attackRange: number;

  @Column("int", { name: "magical_defense", default: () => "'1'" })
  magicalDefense: number;

  @Column("int", { name: "agility", default: () => "'1'" })
  agility: number;

  @Column("int", { name: "knowledge", default: () => "'1'" })
  knowledge: number;

  @Column("int", { name: "will", default: () => "'1'" })
  will: number;

  @Column("int", { name: "magical_boost", default: () => "'1'" })
  magicalBoost: number;

  @Column("int", { name: "magical_boost_resist", default: () => "'1'" })
  magicalBoostResist: number;

  @Column("int", { name: "physical_critical_resist", default: () => "'1'" })
  physicalCriticalResist: number;

  @Column("int", { name: "magical_critical_resist", default: () => "'1'" })
  magicalCriticalResist: number;

  @OneToOne(() => Players, (players) => players.playerGameStats, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "player_id", referencedColumnName: "id" }])
  player: Players;
}
