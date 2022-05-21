import { Column, Entity } from "typeorm";

@Entity("house_object_cooldowns", { schema: "beritra" })
export class HouseObjectCooldowns {
  @Column("int", { primary: true, name: "player_id" })
  playerId: number;

  @Column("int", { primary: true, name: "object_id" })
  objectId: number;

  @Column("bigint", { name: "reuse_time" })
  reuseTime: string;
}
