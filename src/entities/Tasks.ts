import { Column, Entity } from "typeorm";

@Entity("tasks", { schema: "beritra" })
export class Tasks {
  @Column("int", { primary: true, name: "id" })
  id: number;

  @Column("varchar", { name: "task", length: 50 })
  task: string;

  @Column("enum", { name: "type", enum: ["FIXED_IN_TIME"] })
  type: "FIXED_IN_TIME";

  @Column("timestamp", {
    name: "last_activation",
    default: () => "'2010-01-01 12:00:00'",
  })
  lastActivation: Date;

  @Column("varchar", { name: "start_time", length: 8 })
  startTime: string;

  @Column("int", { name: "delay" })
  delay: number;

  @Column("text", { name: "param" })
  param: string;
}
