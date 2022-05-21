import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Players } from "./Players";

@Index("owner_id", ["ownerId"], {})
@Entity("surveys", { schema: "beritra" })
export class Surveys {
  @PrimaryGeneratedColumn({ type: "int", name: "unique_id" })
  uniqueId: number;

  @Column("int", { name: "owner_id" })
  ownerId: number;

  @Column("int", { name: "item_id" })
  itemId: number;

  @Column("decimal", {
    name: "item_count",
    precision: 20,
    scale: 0,
    default: () => "'1'",
  })
  itemCount: string;

  @Column("text", { name: "html_text" })
  htmlText: string;

  @Column("varchar", {
    name: "html_radio",
    length: 100,
    default: () => "'accept'",
  })
  htmlRadio: string;

  @Column("tinyint", { name: "used", width: 1, default: () => "'0'" })
  used: boolean;

  @Column("varchar", { name: "used_time", length: 100, default: () => "''" })
  usedTime: string;

  @ManyToOne(() => Players, (players) => players.surveys, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "owner_id", referencedColumnName: "id" }])
  owner: Players;
}
