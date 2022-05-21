import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Players } from "./Players";

@Entity("player_pets", { schema: "beritra" })
export class PlayerPets {
  @Column("int", { primary: true, name: "player_id" })
  playerId: number;

  @Column("int", { primary: true, name: "pet_id" })
  petId: number;

  @Column("int", { name: "decoration" })
  decoration: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("tinyint", { name: "hungry_level", default: () => "'0'" })
  hungryLevel: number;

  @Column("int", { name: "feed_progress", default: () => "'0'" })
  feedProgress: number;

  @Column("bigint", { name: "reuse_time", default: () => "'0'" })
  reuseTime: string;

  @Column("timestamp", { name: "birthday", default: () => "CURRENT_TIMESTAMP" })
  birthday: Date;

  @Column("bigint", { name: "mood_started", default: () => "'0'" })
  moodStarted: string;

  @Column("int", { name: "counter", default: () => "'0'" })
  counter: number;

  @Column("bigint", { name: "mood_cd_started", default: () => "'0'" })
  moodCdStarted: string;

  @Column("bigint", { name: "gift_cd_started", default: () => "'0'" })
  giftCdStarted: string;

  @Column("varchar", { name: "dopings", nullable: true, length: 80 })
  dopings: string | null;

  @Column("timestamp", { name: "despawn_time", nullable: true })
  despawnTime: Date | null;

  @Column("int", { name: "expire_time" })
  expireTime: number;

  @ManyToOne(() => Players, (players) => players.playerPets, {
    onDelete: "CASCADE",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "player_id", referencedColumnName: "id" }])
  player: Players;
}
