import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("announcements", { schema: "beritra" })
export class Announcements {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("text", { name: "announce" })
  announce: string;

  @Column("enum", {
    name: "faction",
    enum: ["ALL", "ASMODIANS", "ELYOS"],
    default: () => "'ALL'",
  })
  faction: "ALL" | "ASMODIANS" | "ELYOS";

  @Column("enum", {
    name: "type",
    enum: ["SHOUT", "ORANGE", "YELLOW", "WHITE", "SYSTEM"],
    default: () => "'SYSTEM'",
  })
  type: "SHOUT" | "ORANGE" | "YELLOW" | "WHITE" | "SYSTEM";

  @Column("int", { name: "delay", default: () => "'1800'" })
  delay: number;
}
