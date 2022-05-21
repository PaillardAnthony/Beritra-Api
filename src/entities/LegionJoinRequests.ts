import { Column, Entity } from "typeorm";

@Entity("legion_join_requests", { schema: "beritra" })
export class LegionJoinRequests {
  @Column("int", { primary: true, name: "legionId", default: () => "'0'" })
  legionId: number;

  @Column("int", { primary: true, name: "playerId", default: () => "'0'" })
  playerId: number;

  @Column("varchar", { name: "playerName", length: 64, default: () => "''" })
  playerName: string;

  @Column("int", { name: "playerClassId", default: () => "'0'" })
  playerClassId: number;

  @Column("int", { name: "playerRaceId", default: () => "'0'" })
  playerRaceId: number;

  @Column("int", { name: "playerLevel", default: () => "'0'" })
  playerLevel: number;

  @Column("int", { name: "playerGenderId", default: () => "'0'" })
  playerGenderId: number;

  @Column("varchar", {
    name: "joinRequestMsg",
    length: 40,
    default: () => "''",
  })
  joinRequestMsg: string;

  @Column("timestamp", { name: "date", default: () => "CURRENT_TIMESTAMP" })
  date: Date;
}
