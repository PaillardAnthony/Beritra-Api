import { Column, Entity } from "typeorm";

@Entity("logs_paypal", { schema: "beritra" })
export class LogsPaypal {
  @Column("int", { name: "ethereum" })
  ethereum: number;

  @Column("decimal", { name: "paypal_amount", precision: 8, scale: 2 })
  paypalAmount: string;

  @Column("int", { name: "account_id" })
  accountId: number;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
