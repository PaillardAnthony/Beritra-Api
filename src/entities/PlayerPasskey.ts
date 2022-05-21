import { Column, Entity } from "typeorm";

@Entity("player_passkey", { schema: "beritra" })
export class PlayerPasskey {
  @Column("int", { primary: true, name: "account_id" })
  accountId: number;

  @Column("varchar", { primary: true, name: "passkey", length: 65 })
  passkey: string;
}
