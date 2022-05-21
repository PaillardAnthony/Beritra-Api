import { Column, Entity } from "typeorm";

@Entity("siege_locations", { schema: "beritra" })
export class SiegeLocations {
  @Column("int", { primary: true, name: "id" })
  id: number;

  @Column("enum", { name: "race", enum: ["ELYOS", "ASMODIANS", "BALAUR"] })
  race: "ELYOS" | "ASMODIANS" | "BALAUR";

  @Column("int", { name: "legion_id" })
  legionId: number;
}
