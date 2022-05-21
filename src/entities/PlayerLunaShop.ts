import { Column, Entity } from "typeorm";

@Entity("player_luna_shop", { schema: "beritra" })
export class PlayerLunaShop {
  @Column("int", { primary: true, name: "player_id" })
  playerId: number;

  @Column("int", { name: "free_under", default: () => "'0'" })
  freeUnder: number;

  @Column("int", { name: "free_munition", default: () => "'0'" })
  freeMunition: number;

  @Column("int", { name: "free_chest", default: () => "'0'" })
  freeChest: number;
}
