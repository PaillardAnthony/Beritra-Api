import { Column, Entity } from "typeorm";

@Entity("challenge_tasks", { schema: "beritra" })
export class ChallengeTasks {
  @Column("int", { primary: true, name: "task_id" })
  taskId: number;

  @Column("int", { primary: true, name: "quest_id" })
  questId: number;

  @Column("int", { primary: true, name: "owner_id" })
  ownerId: number;

  @Column("enum", {
    primary: true,
    name: "owner_type",
    enum: ["LEGION", "TOWN"],
  })
  ownerType: "LEGION" | "TOWN";

  @Column("int", {
    name: "complete_count",
    unsigned: true,
    default: () => "'0'",
  })
  completeCount: number;

  @Column("timestamp", { name: "complete_time", nullable: true })
  completeTime: Date | null;
}
