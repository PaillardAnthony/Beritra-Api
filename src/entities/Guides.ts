import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Players } from "./Players";

@Index("player_id", ["playerId"], {})
@Entity("guides", { schema: "beritra" })
export class Guides {
  @PrimaryGeneratedColumn({ type: "int", name: "guide_id" })
  guideId: number;

  @Column("int", { name: "player_id" })
  playerId: number;

  @Column("varchar", { name: "title", length: 80 })
  title: string;

  @ManyToOne(() => Players, (players) => players.guides, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "player_id", referencedColumnName: "id" }])
  player: Players;
}
