import { Column, Entity } from "typeorm";

@Entity("logs_item_rewarded", { schema: "beritra" })
export class LogsItemRewarded {
  @Column("varchar", { name: "item_id_rewarded", length: 255 })
  itemIdRewarded: string;

  @Column("varchar", { name: "player_name", length: 255 })
  playerName: string;

  @Column("int", { name: "player_id" })
  playerId: number;

  @Column("int", { name: "rewarded_status", default: () => "'0'" })
  rewardedStatus: number;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
