import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users", { schema: "beritra" })
export class Users {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "account", nullable: true, length: 30 })
  account: string | null;

  @Column("varchar", { name: "ip", nullable: true, length: 30 })
  ip: string | null;

  @Column("datetime", { name: "date", nullable: true })
  date: Date | null;
}
