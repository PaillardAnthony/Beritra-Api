import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("account_votes", { schema: "beritra" })
export class AccountVotes {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "account_id" })
  accountId: number;

  @Column("int", { name: "site" })
  site: number;

  @Column("datetime", { name: "date" })
  date: Date;
}
