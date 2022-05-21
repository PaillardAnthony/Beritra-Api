import { Column, Entity } from "typeorm";

@Entity("player_skill_skins", { schema: "beritra" })
export class PlayerSkillSkins {
  @Column("int", { primary: true, name: "player_id", default: () => "'0'" })
  playerId: number;

  @Column("int", { primary: true, name: "skin_id", default: () => "'0'" })
  skinId: number;

  @Column("bigint", { name: "remaining", nullable: true, default: () => "'0'" })
  remaining: string | null;

  @Column("int", { name: "active", nullable: true, default: () => "'0'" })
  active: number | null;
}
