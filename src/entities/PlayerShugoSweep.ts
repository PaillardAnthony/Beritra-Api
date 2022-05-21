import { Column, Entity } from "typeorm";

@Entity("player_shugo_sweep", { schema: "beritra" })
export class PlayerShugoSweep {
  @Column("int", { primary: true, name: "player_id" })
  playerId: number;

  @Column("int", { name: "free_dice", default: () => "'0'" })
  freeDice: number;

  @Column("int", { name: "sweep_step", default: () => "'0'" })
  sweepStep: number;

  @Column("int", { name: "board_id", default: () => "'0'" })
  boardId: number;
}
