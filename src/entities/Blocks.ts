import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Players } from "./Players";

@Index("blocked_player", ["blockedPlayer"], {})
@Entity("blocks", { schema: "beritra" })
export class Blocks {
  @Column("int", { primary: true, name: "player" })
  player: number;

  @Column("int", { primary: true, name: "blocked_player" })
  blockedPlayer: number;

  @Column("varchar", { name: "reason", length: 100, default: () => "''" })
  reason: string;

  @ManyToOne(() => Players, (players) => players.blocks, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "player", referencedColumnName: "id" }])
  player2: Players;

  @ManyToOne(() => Players, (players) => players.blocks2, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "blocked_player", referencedColumnName: "id" }])
  blockedPlayer2: Players;
}
