import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("news_slug_unique", ["slug"], { unique: true })
@Entity("news", { schema: "beritra" })
export class News {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "account_id" })
  accountId: number;

  @Column("int", { name: "category_id" })
  categoryId: number;

  @Column("varchar", { name: "title", length: 255 })
  title: string;

  @Column("longtext", { name: "content" })
  content: string;

  @Column("varchar", { name: "slug", unique: true, length: 255 })
  slug: string;

  @Column("varchar", { name: "image", nullable: true, length: 255 })
  image: string | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("enum", { name: "news_position", enum: ["big_left", "small_right"] })
  newsPosition: "big_left" | "small_right";
}
