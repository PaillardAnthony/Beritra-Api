import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Players } from "./Players";

@Entity("craft_cooldowns", { schema: "beritra" })
export class CraftCooldowns {
  @Column("int", { primary: true, name: "player_id" })
  playerId: number;

  @Column("int", { primary: true, name: "delay_id", unsigned: true })
  delayId: number;

  @Column("bigint", { name: "reuse_time", unsigned: true })
  reuseTime: string;

  @ManyToOne(() => Players, (players) => players.craftCooldowns, {
    onDelete: "CASCADE",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "player_id", referencedColumnName: "id" }])
  player: Players;
}
