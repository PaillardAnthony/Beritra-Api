import { Column, Entity } from "typeorm";

@Entity("aion_skilllist", { schema: "beritra" })
export class AionSkilllist {
  @Column("int", { primary: true, name: "skill_id", unsigned: true })
  skillId: number;

  @Column("varchar", { name: "skill_name", nullable: true, length: 100 })
  skillName: string | null;

  @Column("tinyint", {
    name: "is_breakthrough",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  isBreakthrough: number | null;
}
