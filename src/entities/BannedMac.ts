import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("banned_mac", { schema: "beritra" })
export class BannedMac {
  @PrimaryGeneratedColumn({ type: "int", name: "uniId" })
  uniId: number;

  @Column("varchar", { name: "address", length: 20 })
  address: string;

  @Column("timestamp", { name: "time", default: () => "'2010-01-01 14:00:00'" })
  time: Date;

  @Column("varchar", { name: "details", length: 255, default: () => "''" })
  details: string;
}
