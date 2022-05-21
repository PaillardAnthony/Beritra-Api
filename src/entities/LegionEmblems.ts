import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { Legions } from "./Legions";

@Entity("legion_emblems", { schema: "beritra" })
export class LegionEmblems {
  @Column("int", { primary: true, name: "legion_id" })
  legionId: number;

  @Column("int", { name: "emblem_id", default: () => "'0'" })
  emblemId: number;

  @Column("int", { name: "color_r", default: () => "'0'" })
  colorR: number;

  @Column("int", { name: "color_g", default: () => "'0'" })
  colorG: number;

  @Column("int", { name: "color_b", default: () => "'0'" })
  colorB: number;

  @Column("enum", {
    name: "emblem_type",
    enum: ["DEFAULT", "CUSTOM"],
    default: () => "'DEFAULT'",
  })
  emblemType: "DEFAULT" | "CUSTOM";

  @Column("longblob", { name: "emblem_data", nullable: true })
  emblemData: Buffer | null;

  @OneToOne(() => Legions, (legions) => legions.legionEmblems, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "legion_id", referencedColumnName: "id" }])
  legion: Legions;
}
