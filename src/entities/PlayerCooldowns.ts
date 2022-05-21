import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Players } from "./Players";

@Entity("player_cooldowns", { schema: "beritra" })
export class PlayerCooldowns {
  @Column("int", { primary: true, name: "player_id" })
  playerId: number;

  @Column("int", { primary: true, name: "cooldown_id" })
  cooldownId: number;

  @Column("bigint", { name: "reuse_delay" })
  reuseDelay: string;

  @ManyToOne(() => Players, (players) => players.playerCooldowns, {
    onDelete: "CASCADE",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "player_id", referencedColumnName: "id" }])
  player: Players;
}
