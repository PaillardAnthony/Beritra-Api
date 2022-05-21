import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Houses } from "./Houses";

@Entity("house_scripts", { schema: "beritra" })
export class HouseScripts {
  @Column("int", { primary: true, name: "house_id" })
  houseId: number;

  @Column("tinyint", { primary: true, name: "index" })
  index: number;

  @Column("mediumtext", { name: "script", nullable: true })
  script: string | null;

  @ManyToOne(() => Houses, (houses) => houses.houseScripts, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "house_id", referencedColumnName: "id" }])
  house: Houses;
}
