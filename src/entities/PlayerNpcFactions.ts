import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Players } from "./Players";

@Entity("player_npc_factions", { schema: "beritra" })
export class PlayerNpcFactions {
  @Column("int", { primary: true, name: "player_id" })
  playerId: number;

  @Column("int", { primary: true, name: "faction_id" })
  factionId: number;

  @Column("tinyint", { name: "active", width: 1 })
  active: boolean;

  @Column("int", { name: "time" })
  time: number;

  @Column("enum", {
    name: "state",
    enum: ["NOTING", "START", "COMPLETE"],
    default: () => "'NOTING'",
  })
  state: "NOTING" | "START" | "COMPLETE";

  @Column("int", { name: "quest_id", default: () => "'0'" })
  questId: number;

  @ManyToOne(() => Players, (players) => players.playerNpcFactions, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "player_id", referencedColumnName: "id" }])
  player: Players;
}
