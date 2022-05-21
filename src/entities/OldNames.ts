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
@Entity("old_names", { schema: "beritra" })
export class OldNames {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "player_id" })
  playerId: number;

  @Column("varchar", { name: "old_name", length: 50 })
  oldName: string;

  @Column("varchar", { name: "new_name", length: 50 })
  newName: string;

  @ManyToOne(() => Players, (players) => players.oldNames, {
    onDelete: "CASCADE",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "player_id", referencedColumnName: "id" }])
  player: Players;
}
