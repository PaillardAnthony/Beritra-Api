import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Players } from "./Players";

@Index("friend", ["friend"], {})
@Entity("friends", { schema: "beritra" })
export class Friends {
  @Column("int", { primary: true, name: "player" })
  player: number;

  @Column("int", { primary: true, name: "friend" })
  friend: number;

  @Column("varchar", { name: "note", length: 255, default: () => "''" })
  note: string;

  @ManyToOne(() => Players, (players) => players.friends, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "player", referencedColumnName: "id" }])
  player2: Players;

  @ManyToOne(() => Players, (players) => players.friends2, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "friend", referencedColumnName: "id" }])
  friend2: Players;
}
