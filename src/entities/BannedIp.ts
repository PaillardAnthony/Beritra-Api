import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("mask", ["mask"], { unique: true })
@Entity("banned_ip", { schema: "beritra" })
export class BannedIp {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "mask", unique: true, length: 45 })
  mask: string;

  @Column("timestamp", { name: "time_end", nullable: true })
  timeEnd: Date | null;
}
