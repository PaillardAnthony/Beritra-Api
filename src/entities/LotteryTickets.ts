import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("lottery_tickets", { schema: "beritra" })
export class LotteryTickets {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "lottery_id", length: 25 })
  lotteryId: string;

  @Column("int", { name: "userid" })
  userid: number;

  @Column("datetime", { name: "buydate" })
  buydate: Date;

  @Column("tinyint", { name: "number1", unsigned: true })
  number1: number;

  @Column("tinyint", { name: "number2", unsigned: true })
  number2: number;

  @Column("tinyint", { name: "number3", unsigned: true })
  number3: number;

  @Column("tinyint", { name: "number4", unsigned: true })
  number4: number;
}
