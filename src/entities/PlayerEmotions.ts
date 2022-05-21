import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Players } from "./Players";

@Entity("player_emotions", { schema: "beritra" })
export class PlayerEmotions {
  @Column("int", { primary: true, name: "player_id" })
  playerId: number;

  @Column("int", { primary: true, name: "emotion" })
  emotion: number;

  @Column("int", { name: "remaining", default: () => "'0'" })
  remaining: number;

  @ManyToOne(() => Players, (players) => players.playerEmotions, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "player_id", referencedColumnName: "id" }])
  player: Players;
}
