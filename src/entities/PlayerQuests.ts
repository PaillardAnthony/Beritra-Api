import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Players } from "./Players";

@Entity("player_quests", { schema: "beritra" })
export class PlayerQuests {
  @Column("int", { primary: true, name: "player_id" })
  playerId: number;

  @Column("int", {
    primary: true,
    name: "quest_id",
    unsigned: true,
    default: () => "'0'",
  })
  questId: number;

  @Column("varchar", { name: "status", length: 10, default: () => "'NONE'" })
  status: string;

  @Column("int", { name: "quest_vars", unsigned: true, default: () => "'0'" })
  questVars: number;

  @Column("int", {
    name: "complete_count",
    unsigned: true,
    default: () => "'0'",
  })
  completeCount: number;

  @Column("timestamp", { name: "complete_time", nullable: true })
  completeTime: Date | null;

  @Column("timestamp", { name: "next_repeat_time", nullable: true })
  nextRepeatTime: Date | null;

  @Column("smallint", { name: "reward", nullable: true })
  reward: number | null;

  @ManyToOne(() => Players, (players) => players.playerQuests, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "player_id", referencedColumnName: "id" }])
  player: Players;
}
