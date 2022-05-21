import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Players } from "./Players";

@Index("item_owner", ["itemOwner"], {})
@Entity("web_reward", { schema: "beritra" })
export class WebReward {
  @PrimaryGeneratedColumn({ type: "int", name: "unique" })
  unique: number;

  @Column("int", { name: "item_owner" })
  itemOwner: number;

  @Column("int", { name: "item_id" })
  itemId: number;

  @Column("decimal", {
    name: "item_count",
    precision: 20,
    scale: 0,
    default: () => "'1'",
  })
  itemCount: string;

  @Column("tinyint", { name: "rewarded", width: 1, default: () => "'0'" })
  rewarded: boolean;

  @Column("varchar", {
    name: "added",
    nullable: true,
    length: 70,
    default: () => "''",
  })
  added: string | null;

  @Column("varchar", {
    name: "received",
    nullable: true,
    length: 70,
    default: () => "''",
  })
  received: string | null;

  @ManyToOne(() => Players, (players) => players.webRewards, {
    onDelete: "CASCADE",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "item_owner", referencedColumnName: "id" }])
  itemOwner2: Players;
}
