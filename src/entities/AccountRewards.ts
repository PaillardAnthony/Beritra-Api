import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("account_rewards", { schema: "beritra" })
export class AccountRewards {
  @PrimaryGeneratedColumn({ type: "int", name: "uniqId" })
  uniqId: number;

  @Column("int", { name: "accountId" })
  accountId: number;

  @Column("varchar", { name: "added", length: 70, default: () => "''" })
  added: string;

  @Column("decimal", {
    name: "points",
    precision: 20,
    scale: 0,
    default: () => "'0'",
  })
  points: string;

  @Column("varchar", { name: "received", length: 70, default: () => "'0'" })
  received: string;

  @Column("tinyint", { name: "rewarded", width: 1, default: () => "'0'" })
  rewarded: boolean;

  @Column("decimal", {
    name: "luna",
    precision: 20,
    scale: 0,
    default: () => "'0'",
  })
  luna: string;
}
