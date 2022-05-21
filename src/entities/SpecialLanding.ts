import { Column, Entity } from "typeorm";

@Entity("special_landing", { schema: "beritra" })
export class SpecialLanding {
  @Column("int", { primary: true, name: "id" })
  id: number;

  @Column("enum", { name: "type", enum: ["ACTIVE", "NO_ACTIVE"] })
  type: "ACTIVE" | "NO_ACTIVE";
}
