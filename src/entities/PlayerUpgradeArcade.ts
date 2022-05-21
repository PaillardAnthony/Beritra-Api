import { Column, Entity } from "typeorm";

@Entity("player_upgrade_arcade", { schema: "beritra" })
export class PlayerUpgradeArcade {
  @Column("int", { primary: true, name: "player_id" })
  playerId: number;

  @Column("int", { name: "frenzy_meter" })
  frenzyMeter: number;

  @Column("int", { name: "upgrade_lvl" })
  upgradeLvl: number;
}
