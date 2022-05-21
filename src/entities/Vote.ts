import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("vote", { schema: "beritra" })
export class Vote {
  @PrimaryGeneratedColumn({ type: "int", name: "idvote" })
  idvote: number;

  @Column("int", { name: "status" })
  status: number;
}
