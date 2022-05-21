import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Players } from "./Players";

@Index("seller_id", ["sellerId"], {})
@Entity("broker", { schema: "beritra" })
export class Broker {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "item_pointer", default: () => "'0'" })
  itemPointer: number;

  @Column("int", { name: "item_id" })
  itemId: number;

  @Column("bigint", { name: "item_count" })
  itemCount: string;

  @Column("varchar", { name: "item_creator", nullable: true, length: 50 })
  itemCreator: string | null;

  @Column("varchar", { name: "seller", nullable: true, length: 50 })
  seller: string | null;

  @Column("bigint", { name: "price", default: () => "'0'" })
  price: string;

  @Column("enum", { name: "broker_race", enum: ["ELYOS", "ASMODIAN"] })
  brokerRace: "ELYOS" | "ASMODIAN";

  @Column("timestamp", {
    name: "expire_time",
    default: () => "'2010-01-01 14:00:00'",
  })
  expireTime: Date;

  @Column("timestamp", {
    name: "settle_time",
    default: () => "'2010-01-01 14:00:00'",
  })
  settleTime: Date;

  @Column("int", { name: "seller_id" })
  sellerId: number;

  @Column("tinyint", { name: "is_sold", width: 1 })
  isSold: boolean;

  @Column("tinyint", { name: "is_settled", width: 1 })
  isSettled: boolean;

  @Column("tinyint", { name: "is_splitsell", width: 1 })
  isSplitsell: boolean;

  @ManyToOne(() => Players, (players) => players.brokers, {
    onDelete: "CASCADE",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "seller_id", referencedColumnName: "id" }])
  seller_2: Players;
}
