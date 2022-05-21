import { Column, Entity } from "typeorm";

@Entity("towns", { schema: "beritra" })
export class Towns {
  @Column("int", { primary: true, name: "id" })
  id: number;

  @Column("int", { name: "level", default: () => "'1'" })
  level: number;

  @Column("int", { name: "points", default: () => "'0'" })
  points: number;

  @Column("enum", { name: "race", enum: ["ELYOS", "ASMODIANS"] })
  race: "ELYOS" | "ASMODIANS";

  @Column("timestamp", {
    name: "level_up_date",
    default: () => "'2013-01-01 14:00:00'",
  })
  levelUpDate: Date;
}
