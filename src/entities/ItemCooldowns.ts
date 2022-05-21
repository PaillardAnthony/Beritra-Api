import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Players } from "./Players";

@Entity("item_cooldowns", { schema: "beritra" })
export class ItemCooldowns {
  @Column("int", { primary: true, name: "player_id" })
  playerId: number;

  @Column("int", { primary: true, name: "delay_id" })
  delayId: number;

  @Column("smallint", { name: "use_delay", unsigned: true })
  useDelay: number;

  @Column("bigint", { name: "reuse_time" })
  reuseTime: string;

  @ManyToOne(() => Players, (players) => players.itemCooldowns, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "player_id", referencedColumnName: "id" }])
  player: Players;
}
