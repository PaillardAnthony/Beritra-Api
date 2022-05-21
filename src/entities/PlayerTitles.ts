import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Players } from "./Players";

@Entity("player_titles", { schema: "beritra" })
export class PlayerTitles {
  @Column("int", { primary: true, name: "player_id" })
  playerId: number;

  @Column("int", { primary: true, name: "title_id" })
  titleId: number;

  @Column("int", { name: "remaining", default: () => "'0'" })
  remaining: number;

  @ManyToOne(() => Players, (players) => players.playerTitles, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "player_id", referencedColumnName: "id" }])
  player: Players;
}
