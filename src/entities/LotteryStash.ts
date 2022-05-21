import { Column, Entity } from "typeorm";

@Entity("lottery_stash", { schema: "beritra" })
export class LotteryStash {
  @Column("int", { primary: true, name: "userid" })
  userid: number;

  @Column("int", { name: "credits", default: () => "'0'" })
  credits: number;

  @Column("tinyint", { name: "locked", width: 1, default: () => "'0'" })
  locked: boolean;

  @Column("text", { name: "note", nullable: true })
  note: string | null;
}
