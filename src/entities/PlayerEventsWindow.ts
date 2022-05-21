import { Column, Entity, Index } from "typeorm";

@Index("account_id", ["accountId"], {})
@Entity("player_events_window", { schema: "beritra" })
export class PlayerEventsWindow {
  @Column("int", { name: "account_id" })
  accountId: number;

  @Column("int", { name: "event_id", nullable: true })
  eventId: number | null;

  @Column("timestamp", {
    name: "last_stamp",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  lastStamp: Date | null;

  @Column("int", { name: "elapsed", default: () => "'0'" })
  elapsed: number;

  @Column("int", { name: "reward_recived_count", default: () => "'0'" })
  rewardRecivedCount: number;
}
