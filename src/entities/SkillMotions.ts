import { Column, Entity } from "typeorm";

@Entity("skill_motions", { schema: "beritra" })
export class SkillMotions {
  @Column("varchar", {
    primary: true,
    name: "motion_name",
    length: 255,
    default: () => "''",
  })
  motionName: string;

  @Column("int", { primary: true, name: "skill_id" })
  skillId: number;

  @Column("int", { primary: true, name: "attack_speed" })
  attackSpeed: number;

  @Column("varchar", { primary: true, name: "weapon_type", length: 255 })
  weaponType: string;

  @Column("varchar", { primary: true, name: "off_weapon_type", length: 255 })
  offWeaponType: string;

  @Column("varchar", { name: "race", length: 255 })
  race: string;

  @Column("varchar", { primary: true, name: "gender", length: 255 })
  gender: string;

  @Column("int", { name: "time", default: () => "'0'" })
  time: number;
}
