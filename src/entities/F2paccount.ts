import { Column, Entity } from "typeorm";

@Entity("f2paccount", { schema: "beritra" })
export class F2paccount {
  @Column("int", { primary: true, name: "player_id" })
  playerId: number;

  @Column("int", { name: "time" })
  time: number;
}
