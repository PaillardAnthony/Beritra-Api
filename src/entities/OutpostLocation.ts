import { Column, Entity } from "typeorm";

@Entity("outpost_location", { schema: "beritra" })
export class OutpostLocation {
  @Column("int", { name: "id" })
  id: number;

  @Column("enum", { name: "race", enum: ["ELYOS", "ASMODIANS", "NPC"] })
  race: "ELYOS" | "ASMODIANS" | "NPC";
}
