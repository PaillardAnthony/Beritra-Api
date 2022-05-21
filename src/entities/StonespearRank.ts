import { Column, Entity } from "typeorm";

@Entity("stonespear_rank", { schema: "beritra" })
export class StonespearRank {
  @Column("int", { primary: true, name: "legion_id" })
  legionId: number;

  @Column("int", { name: "territory_id" })
  territoryId: number;

  @Column("int", { name: "score" })
  score: number;

  @Column("int", { name: "time" })
  time: number;

  @Column("timestamp", { name: "date", default: () => "CURRENT_TIMESTAMP" })
  date: Date;

  @Column("varchar", { name: "legion_name", length: 500 })
  legionName: string;
}
