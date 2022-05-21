import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("player_transfers", { schema: "beritra" })
export class PlayerTransfers {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("tinyint", { name: "source_server" })
  sourceServer: number;

  @Column("tinyint", { name: "target_server" })
  targetServer: number;

  @Column("int", { name: "source_account_id" })
  sourceAccountId: number;

  @Column("int", { name: "target_account_id" })
  targetAccountId: number;

  @Column("int", { name: "player_id" })
  playerId: number;

  @Column("tinyint", { name: "status", width: 1, default: () => "'0'" })
  status: boolean;

  @Column("varchar", { name: "time_added", nullable: true, length: 100 })
  timeAdded: string | null;

  @Column("varchar", { name: "time_performed", nullable: true, length: 100 })
  timePerformed: string | null;

  @Column("varchar", { name: "time_done", nullable: true, length: 100 })
  timeDone: string | null;

  @Column("text", { name: "comment", nullable: true })
  comment: string | null;
}
