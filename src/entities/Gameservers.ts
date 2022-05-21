import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("gameservers", { schema: "beritra" })
export class Gameservers {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "mask", length: 45 })
  mask: string;

  @Column("varchar", { name: "password", length: 65 })
  password: string;
}
