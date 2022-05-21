import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Houses } from "./Houses";

@Index("house_id_ibfk_1", ["houseId"], {})
@Entity("house_bids", { schema: "beritra" })
export class HouseBids {
  @Column("int", { primary: true, name: "player_id" })
  playerId: number;

  @Column("int", { primary: true, name: "house_id" })
  houseId: number;

  @Column("bigint", { primary: true, name: "bid" })
  bid: string;

  @Column("timestamp", {
    name: "bid_time",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  bidTime: Date | null;

  @ManyToOne(() => Houses, (houses) => houses.houseBids, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "house_id", referencedColumnName: "id" }])
  house: Houses;
}
