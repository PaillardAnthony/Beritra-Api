import { Column, Entity } from "typeorm";

@Entity("abyss_landing", { schema: "beritra" })
export class AbyssLanding {
  @Column("int", { primary: true, name: "id" })
  id: number;

  @Column("int", { name: "level", default: () => "'1'" })
  level: number;

  @Column("int", { name: "points", default: () => "'0'" })
  points: number;

  @Column("int", { name: "siege", default: () => "'0'" })
  siege: number;

  @Column("int", { name: "commander", default: () => "'0'" })
  commander: number;

  @Column("int", { name: "artefact", default: () => "'0'" })
  artefact: number;

  @Column("int", { name: "base", default: () => "'0'" })
  base: number;

  @Column("int", { name: "monuments", default: () => "'0'" })
  monuments: number;

  @Column("int", { name: "quest", default: () => "'0'" })
  quest: number;

  @Column("int", { name: "facility", default: () => "'0'" })
  facility: number;

  @Column("enum", { name: "race", enum: ["ELYOS", "ASMODIANS"] })
  race: "ELYOS" | "ASMODIANS";

  @Column("timestamp", {
    name: "level_up_date",
    default: () => "CURRENT_TIMESTAMP",
  })
  levelUpDate: Date;
}
