import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("player_minions", { schema: "beritra" })
export class PlayerMinions {
  @Column("int", { name: "player_id" })
  playerId: number;

  @PrimaryGeneratedColumn({ type: "int", name: "object_id" })
  objectId: number;

  @Column("int", { name: "minion_id" })
  minionId: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("varchar", { name: "grade", length: 11 })
  grade: string;

  @Column("varchar", { name: "level", length: 11 })
  level: string;

  @Column("timestamp", { name: "birthday", default: () => "CURRENT_TIMESTAMP" })
  birthday: Date;

  @Column("int", { name: "growth_points", default: () => "'0'" })
  growthPoints: number;

  @Column("bigint", { name: "is_lock", default: () => "'1'" })
  isLock: string;

  @Column("timestamp", { name: "despawn_time", nullable: true })
  despawnTime: Date | null;
}
