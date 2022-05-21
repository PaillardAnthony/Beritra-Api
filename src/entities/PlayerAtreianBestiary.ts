import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Players } from "./Players";

@Entity("player_atreian_bestiary", { schema: "beritra" })
export class PlayerAtreianBestiary {
  @Column("int", { primary: true, name: "player_id" })
  playerId: number;

  @Column("int", { primary: true, name: "id" })
  id: number;

  @Column("int", { name: "kill_count" })
  killCount: number;

  @Column("int", { name: "level" })
  level: number;

  @Column("int", { name: "claim_reward", default: () => "'0'" })
  claimReward: number;

  @ManyToOne(() => Players, (players) => players.playerAtreianBestiaries, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "player_id", referencedColumnName: "id" }])
  player: Players;
}
