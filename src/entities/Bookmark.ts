import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bookmark", { schema: "beritra" })
export class Bookmark {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 50 })
  name: string | null;

  @Column("int", { name: "char_id" })
  charId: number;

  @Column("float", { name: "x", precision: 12 })
  x: number;

  @Column("float", { name: "y", precision: 12 })
  y: number;

  @Column("float", { name: "z", precision: 12 })
  z: number;

  @Column("int", { name: "world_id" })
  worldId: number;
}
