import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("name", ["name"], { unique: true })
@Entity("account_data", { schema: "beritra" })
export class AccountData {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;
  
  @ApiProperty()
  @Column("varchar", { name: "name", unique: true, length: 45 })
  name: string;
  
  @ApiProperty()
  @Column("varchar", { name: "password", length: 65 })
  password: string;

  @Column("tinyint", { name: "activated", width: 1, default: () => "'1'" })
  activated: boolean;

  @Column("tinyint", { name: "access_level", default: () => "'0'" })
  accessLevel: number;

  @Column("tinyint", { name: "membership", default: () => "'0'" })
  membership: number;

  @Column("tinyint", { name: "old_membership", default: () => "'0'" })
  oldMembership: number;

  @Column("tinyint", { name: "last_server", default: () => "'-1'" })
  lastServer: number;

  @Column("varchar", { name: "last_ip", nullable: true, length: 20 })
  lastIp: string | null;

  @Column("varchar", { name: "ip_force", nullable: true, length: 20 })
  ipForce: string | null;

  @Column("int", {
    name: "reward_points",
    nullable: true,
    default: () => "'0'",
  })
  rewardPoints: number | null;

  @Column("date", { name: "expire", nullable: true })
  expire: string | null;

  @Column("int", { name: "toll", default: () => "'0'" })
  toll: number;

  @Column("varchar", { name: "email", nullable: true, length: 60 })
  email: string | null;

  @Column("varchar", { name: "address", nullable: true, length: 20 })
  address: string | null;

  @Column("varchar", {
    name: "last_mac",
    length: 20,
    default: () => "'xx-xx-xx-xx-xx-xx'",
  })
  lastMac: string;

  @Column("float", { name: "balance", precision: 12, default: () => "'0'" })
  balance: number;

  @Column("int", { name: "luna", default: () => "'0'" })
  luna: number;

  @Column("int", { name: "vote", default: () => "'0'" })
  vote: number;

  @Column("varchar", { name: "remember_token", nullable: true, length: 100 })
  rememberToken: string | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("int", { name: "rewarded_status", default: () => "'0'" })
  rewardedStatus: number;

  @Column("int", { name: "jumping", default: () => "'0'" })
  jumping: number;

  @Column("tinyint", { name: "free_jumping", width: 1, default: () => "'0'" })
  freeJumping: boolean;

  @Column("char", { name: "hash", nullable: true, length: 50 })
  hash: string | null;

  @Column("int", { name: "discord_id", nullable: true })
  discird_id: Number | null;

  @Column("char", {
    name: "confirmed",
    nullable: true,
    length: 50,
    default: () => "'0'",
  })
  confirmed: string | null;
}
