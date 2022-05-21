import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Legions } from "./Legions";

@Index("legion_id", ["legionId"], {})
@Entity("legion_history", { schema: "beritra" })
export class LegionHistory {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "legion_id" })
  legionId: number;

  @Column("timestamp", { name: "date", default: () => "CURRENT_TIMESTAMP" })
  date: Date;

  @Column("enum", {
    name: "history_type",
    enum: [
      "CREATE",
      "JOIN",
      "KICK",
      "APPOINTED",
      "EMBLEM_REGISTER",
      "EMBLEM_MODIFIED",
      "ITEM_DEPOSIT",
      "ITEM_WITHDRAW",
      "KINAH_DEPOSIT",
      "KINAH_WITHDRAW",
      "LEVEL_UP",
    ],
  })
  historyType:
    | "CREATE"
    | "JOIN"
    | "KICK"
    | "APPOINTED"
    | "EMBLEM_REGISTER"
    | "EMBLEM_MODIFIED"
    | "ITEM_DEPOSIT"
    | "ITEM_WITHDRAW"
    | "KINAH_DEPOSIT"
    | "KINAH_WITHDRAW"
    | "LEVEL_UP";

  @Column("varchar", { name: "name", length: 50 })
  name: string;

  @Column("smallint", { name: "tab_id", default: () => "'0'" })
  tabId: number;

  @Column("varchar", { name: "description", length: 30, default: () => "''" })
  description: string;

  @ManyToOne(() => Legions, (legions) => legions.legionHistories, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "legion_id", referencedColumnName: "id" }])
  legion: Legions;
}
