import { Column, Entity } from "typeorm";

@Entity("shoppingcart", { schema: "beritra" })
export class Shoppingcart {
  @Column("varchar", { primary: true, name: "identifier", length: 255 })
  identifier: string;

  @Column("varchar", { primary: true, name: "instance", length: 255 })
  instance: string;

  @Column("longtext", { name: "content" })
  content: string;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
