import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("item", { schema: "beritra" })
export class Item {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "code" })
  code: number;

  @Column("varchar", { name: "nom", length: 255 })
  nom: string;

  @Column("varchar", { name: "image", length: 255 })
  image: string;

  @Column("int", { name: "quantite" })
  quantite: number;

  @Column("int", { name: "prix" })
  prix: number;

  @Column("int", { name: "id_categorie" })
  idCategorie: number;

  @Column("varchar", { name: "qualite", length: 255 })
  qualite: string;

  @Column("varchar", { name: "createur", length: 255 })
  createur: string;

  @Column("timestamp", {
    name: "date_creation",
    default: () => "CURRENT_TIMESTAMP",
  })
  dateCreation: Date;
}
