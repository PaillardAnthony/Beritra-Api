import { Column, Entity, Index, OneToMany } from "typeorm";
import { HouseBids } from "./HouseBids";
import { HouseScripts } from "./HouseScripts";

@Index("address", ["address"], {})
@Entity("houses", { schema: "beritra" })
export class Houses {
  @Column("int", { primary: true, name: "id" })
  id: number;

  @Column("int", { name: "player_id", default: () => "'0'" })
  playerId: number;

  @Column("int", { name: "building_id" })
  buildingId: number;

  @Column("int", { name: "address" })
  address: number;

  @Column("timestamp", {
    name: "acquire_time",
    default: () => "CURRENT_TIMESTAMP",
  })
  acquireTime: Date;

  @Column("int", { name: "settings", default: () => "'0'" })
  settings: number;

  @Column("enum", {
    name: "status",
    enum: ["ACTIVE", "SELL_WAIT", "INACTIVE", "NOSALE"],
    default: () => "'ACTIVE'",
  })
  status: "ACTIVE" | "SELL_WAIT" | "INACTIVE" | "NOSALE";

  @Column("tinyint", { name: "fee_paid", width: 1, default: () => "'1'" })
  feePaid: boolean;

  @Column("timestamp", { name: "next_pay", nullable: true })
  nextPay: Date | null;

  @Column("timestamp", { name: "sell_started", nullable: true })
  sellStarted: Date | null;

  @Column("binary", { name: "sign_notice", nullable: true, length: 130 })
  signNotice: Buffer | null;

  @OneToMany(() => HouseBids, (houseBids) => houseBids.house)
  houseBids: HouseBids[];

  @OneToMany(() => HouseScripts, (houseScripts) => houseScripts.house)
  houseScripts: HouseScripts[];
}
