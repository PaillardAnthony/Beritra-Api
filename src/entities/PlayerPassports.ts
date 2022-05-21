import { Column, Entity, Index } from "typeorm";

@Index("account_passport", ["accountId", "passportId"], { unique: true })
@Entity("player_passports", { schema: "beritra" })
export class PlayerPassports {
  @Column("int", { name: "account_id" })
  accountId: number;

  @Column("int", { name: "passport_id" })
  passportId: number;

  @Column("int", { name: "stamps", default: () => "'0'" })
  stamps: number;

  @Column("timestamp", {
    name: "last_stamp",
    default: () => "CURRENT_TIMESTAMP",
  })
  lastStamp: Date;

  @Column("tinyint", { name: "rewarded", width: 1, default: () => "'0'" })
  rewarded: boolean;
}
