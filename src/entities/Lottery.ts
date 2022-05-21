import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("lottery", { schema: "beritra" })
export class Lottery {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 25 })
  name: string;

  @Column("int", { name: "current_jackpot", unsigned: true })
  currentJackpot: number;

  @Column("tinyint", {
    name: "current_stage",
    unsigned: true,
    default: () => "'0'",
  })
  currentStage: number;

  @Column("varchar", { name: "start_timestamp", length: 25 })
  startTimestamp: string;

  @Column("varchar", { name: "end_timestamp", length: 25 })
  endTimestamp: string;

  @Column("tinyint", { name: "number1", unsigned: true })
  number1: number;

  @Column("tinyint", { name: "number2", unsigned: true })
  number2: number;

  @Column("tinyint", { name: "number3", unsigned: true })
  number3: number;

  @Column("tinyint", { name: "number4", unsigned: true })
  number4: number;

  @Column("int", { name: "winners_1", nullable: true, unsigned: true })
  winners_1: number | null;

  @Column("int", { name: "winners_2", nullable: true, unsigned: true })
  winners_2: number | null;

  @Column("int", { name: "winners_3", nullable: true, unsigned: true })
  winners_3: number | null;

  @Column("int", { name: "winners_4", nullable: true, unsigned: true })
  winners_4: number | null;

  @Column("tinyint", {
    name: "finished",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  finished: number | null;
}
