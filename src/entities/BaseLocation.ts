import { Column, Entity } from "typeorm";

@Entity("base_location", { schema: "beritra" })
export class BaseLocation {
  @Column("int", { primary: true, name: "id" })
  id: number;

  @Column("enum", { name: "race", enum: ["ELYOS", "ASMODIANS", "NPC"] })
  race: "ELYOS" | "ASMODIANS" | "NPC";
}
