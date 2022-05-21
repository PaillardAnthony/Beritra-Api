import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from "typeorm";
import { Players } from "./Players";
import { Legions } from "./Legions";

@Index("player_id", ["playerId"], {})
@Index("legion_id", ["legionId"], {})
@Entity("legion_members", { schema: "beritra" })
export class LegionMembers {
  @Column("int", { name: "legion_id" })
  legionId: number;

  @Column("int", { primary: true, name: "player_id" })
  playerId: number;

  @Column("varchar", { name: "nickname", length: 10, default: () => "''" })
  nickname: string;

  @Column("enum", {
    name: "rank",
    enum: ["BRIGADE_GENERAL", "CENTURION", "LEGIONARY", "DEPUTY", "VOLUNTEER"],
    default: () => "'VOLUNTEER'",
  })
  rank: "BRIGADE_GENERAL" | "CENTURION" | "LEGIONARY" | "DEPUTY" | "VOLUNTEER";

  @Column("varchar", {
    name: "selfintro",
    nullable: true,
    length: 32,
    default: () => "''",
  })
  selfintro: string | null;

  @Column("int", { name: "challenge_score", default: () => "'0'" })
  challengeScore: number;

  @OneToOne(() => Players, (players) => players.legionMembers, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "player_id", referencedColumnName: "id" }])
  player: Players;

  @ManyToOne(() => Legions, (legions) => legions.legionMembers, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "legion_id", referencedColumnName: "id" }])
  legion: Legions;
}
