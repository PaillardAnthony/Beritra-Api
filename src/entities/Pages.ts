import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("pages", { schema: "beritra" })
export class Pages {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "page_name", length: 255 })
  pageName: string;

  @Column("text", { name: "text_content" })
  textContent: string;
}
