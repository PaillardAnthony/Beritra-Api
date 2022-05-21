import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("realms", { schema: "beritra" })
export class Realms {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 32 })
  name: string | null;

  @Column("varchar", { name: "sqlhost", nullable: true, length: 32 })
  sqlhost: string | null;

  @Column("varchar", { name: "sqluser", nullable: true, length: 32 })
  sqluser: string | null;

  @Column("varchar", { name: "sqlpass", nullable: true, length: 32 })
  sqlpass: string | null;

  @Column("varchar", { name: "chardb", nullable: true, length: 32 })
  chardb: string | null;
}
