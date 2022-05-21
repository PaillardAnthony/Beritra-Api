import { Column, Entity } from "typeorm";

@Entity("account_security", { schema: "beritra" })
export class AccountSecurity {
  @Column("int", { primary: true, name: "id" })
  id: number;

  @Column("tinyint", {
    name: "email_confirmed",
    width: 1,
    default: () => "'0'",
  })
  emailConfirmed: boolean;

  @Column("datetime", { name: "email_confirm_date", nullable: true })
  emailConfirmDate: Date | null;

  @Column("varchar", { name: "question_1", nullable: true, length: 100 })
  question_1: string | null;

  @Column("varchar", { name: "answer_1", nullable: true, length: 50 })
  answer_1: string | null;

  @Column("varchar", { name: "question_2", nullable: true, length: 100 })
  question_2: string | null;

  @Column("varchar", { name: "answer_2", nullable: true, length: 50 })
  answer_2: string | null;

  @Column("datetime", { name: "questions_date", nullable: true })
  questionsDate: Date | null;

  @Column("int", { name: "security_pin", nullable: true })
  securityPin: number | null;

  @Column("datetime", { name: "security_pin_date", nullable: true })
  securityPinDate: Date | null;
}
