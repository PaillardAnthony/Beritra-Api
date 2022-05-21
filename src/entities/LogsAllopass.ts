import { Column, Entity } from "typeorm";

@Entity("logs_allopass", { schema: "beritra" })
export class LogsAllopass {
  @Column("varchar", { name: "allopass_id", length: 255 })
  allopassId: string;

  @Column("int", { name: "account_id" })
  accountId: number;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
