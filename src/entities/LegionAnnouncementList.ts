import {Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { Legions } from "./Legions";

@Index("legion_id", ["legionId"], {})
@Entity("legion_announcement_list", { schema: "beritra" })
export class LegionAnnouncementList {

  @PrimaryGeneratedColumn()
  id: number

  @Column("int", { name: "legion_id" })
  legionId: number;

  @Column("varchar", { name: "announcement", length: 256 })
  announcement: string;

  @Column("timestamp", { name: "date", default: () => "CURRENT_TIMESTAMP" })
  date: Date;

  @ManyToOne(() => Legions, (legions) => legions.legionAnnouncementLists, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "legion_id", referencedColumnName: "id" }])
  legion: Legions;
}
