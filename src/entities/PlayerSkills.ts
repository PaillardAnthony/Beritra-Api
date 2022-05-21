import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Players } from "./Players";

@Entity("player_skills", { schema: "beritra" })
export class PlayerSkills {
  @Column("int", { primary: true, name: "player_id" })
  playerId: number;

  @Column("int", { primary: true, name: "skill_id" })
  skillId: number;

  @Column("int", { name: "skill_level", default: () => "'1'" })
  skillLevel: number;

  @ManyToOne(() => Players, (players) => players.playerSkills, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "player_id", referencedColumnName: "id" }])
  player: Players;
}
