import { Column, Entity } from "typeorm";

@Entity("server_variables", { schema: "beritra" })
export class ServerVariables {
  @Column("varchar", { primary: true, name: "key", length: 30 })
  key: string;

  @Column("varchar", { name: "value", length: 30 })
  value: string;
}
