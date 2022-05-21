import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Players } from "./Players";

@Index("mail_recipient_id", ["mailRecipientId"], {})
@Entity("mail", { schema: "beritra" })
export class Mail {
  @Column("int", { primary: true, name: "mail_unique_id" })
  mailUniqueId: number;

  @Column("int", { name: "mail_recipient_id" })
  mailRecipientId: number;

  @Column("varchar", { name: "sender_name", length: 26 })
  senderName: string;

  @Column("varchar", { name: "mail_title", length: 20 })
  mailTitle: string;

  @Column("varchar", { name: "mail_message", length: 1000 })
  mailMessage: string;

  @Column("tinyint", { name: "unread", default: () => "'1'" })
  unread: number;

  @Column("int", { name: "attached_item_id" })
  attachedItemId: number;

  @Column("bigint", { name: "attached_kinah_count" })
  attachedKinahCount: string;

  @Column("tinyint", { name: "express", default: () => "'0'" })
  express: number;

  @Column("timestamp", {
    name: "recieved_time",
    default: () => "CURRENT_TIMESTAMP",
  })
  recievedTime: Date;

  @Column("bigint", { name: "attached_ap_count" })
  attachedApCount: string;

  @ManyToOne(() => Players, (players) => players.mail, {
    onDelete: "CASCADE",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "mail_recipient_id", referencedColumnName: "id" }])
  mailRecipient: Players;
}
