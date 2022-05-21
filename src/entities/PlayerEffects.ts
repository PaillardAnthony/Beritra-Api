import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Players } from "./Players";

@Entity("player_effects", { schema: "beritra" })
export class PlayerEffects {
  @Column("int", { primary: true, name: "player_id" })
  playerId: number;

  @Column("int", { primary: true, name: "skill_id" })
  skillId: number;

  @Column("tinyint", { name: "skill_lvl" })
  skillLvl: number;

  @Column("int", { name: "current_time" })
  currentTime: number;

  @Column("bigint", { name: "end_time" })
  endTime: string;

  @ManyToOne(() => Players, (players) => players.playerEffects, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "player_id", referencedColumnName: "id" }])
  player: Players;
}
