import { Column, Entity } from "typeorm";

@Entity("account_time", { schema: "beritra" })
export class AccountTime {
  @Column("int", { primary: true, name: "account_id" })
  accountId: number;

  @Column("timestamp", {
    name: "last_active",
    default: () => "CURRENT_TIMESTAMP",
  })
  lastActive: Date;

  @Column("timestamp", { name: "expiration_time", nullable: true })
  expirationTime: Date | null;

  @Column("int", {
    name: "session_duration",
    nullable: true,
    default: () => "'0'",
  })
  sessionDuration: number | null;

  @Column("int", {
    name: "accumulated_online",
    nullable: true,
    default: () => "'0'",
  })
  accumulatedOnline: number | null;

  @Column("int", {
    name: "accumulated_rest",
    nullable: true,
    default: () => "'0'",
  })
  accumulatedRest: number | null;

  @Column("timestamp", { name: "penalty_end", nullable: true })
  penaltyEnd: Date | null;
}
