import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Players } from "./Players";

@Entity("player_settings", { schema: "beritra" })
export class PlayerSettings {
  @Column("int", { primary: true, name: "player_id" })
  playerId: number;

  @Column("tinyint", { primary: true, name: "settings_type", width: 1 })
  settingsType: boolean;

  @Column("blob", { name: "settings" })
  settings: Buffer;

  @ManyToOne(() => Players, (players) => players.playerSettings, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "player_id", referencedColumnName: "id" }])
  player: Players;
}
