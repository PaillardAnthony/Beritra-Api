import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Players } from "./Players";

@Entity("player_punishments", { schema: "beritra" })
export class PlayerPunishments {
  @Column("int", { primary: true, name: "player_id" })
  playerId: number;

  @Column("enum", {
    primary: true,
    name: "punishment_type",
    enum: ["PRISON", "GATHER", "CHARBAN"],
  })
  punishmentType: "PRISON" | "GATHER" | "CHARBAN";

  @Column("int", {
    name: "start_time",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  startTime: number | null;

  @Column("int", {
    name: "duration",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  duration: number | null;

  @Column("text", { name: "reason", nullable: true })
  reason: string | null;

  @ManyToOne(() => Players, (players) => players.playerPunishments, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "player_id", referencedColumnName: "id" }])
  player: Players;
}
