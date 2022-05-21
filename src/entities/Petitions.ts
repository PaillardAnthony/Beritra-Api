import { Column, Entity } from "typeorm";

@Entity("petitions", { schema: "beritra" })
export class Petitions {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("int", { name: "player_id" })
  playerId: number;

  @Column("int", { name: "type" })
  type: number;

  @Column("varchar", { name: "title", length: 255 })
  title: string;

  @Column("text", { name: "message" })
  message: string;

  @Column("varchar", { name: "add_data", nullable: true, length: 255 })
  addData: string | null;

  @Column("bigint", { name: "time", default: () => "'0'" })
  time: string;

  @Column("enum", {
    name: "status",
    enum: ["PENDING", "IN_PROGRESS", "REPLIED"],
  })
  status: "PENDING" | "IN_PROGRESS" | "REPLIED";
}
