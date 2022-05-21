import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Players } from "./Players";

@Entity("portal_cooldowns", { schema: "beritra" })
export class PortalCooldowns {
  @Column("int", { primary: true, name: "player_id" })
  playerId: number;

  @Column("int", { primary: true, name: "world_id" })
  worldId: number;

  @Column("bigint", { name: "reuse_time" })
  reuseTime: string;

  @Column("int", { name: "entry_count" })
  entryCount: number;

  @ManyToOne(() => Players, (players) => players.portalCooldowns, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "player_id", referencedColumnName: "id" }])
  player: Players;
}
