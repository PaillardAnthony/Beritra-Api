"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
const typeorm_1 = require("typeorm");
const Players_1 = require("./Players");
let Mail = class Mail {
};
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "mail_unique_id" }),
    __metadata("design:type", Number)
], Mail.prototype, "mailUniqueId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "mail_recipient_id" }),
    __metadata("design:type", Number)
], Mail.prototype, "mailRecipientId", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "sender_name", length: 26 }),
    __metadata("design:type", String)
], Mail.prototype, "senderName", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "mail_title", length: 20 }),
    __metadata("design:type", String)
], Mail.prototype, "mailTitle", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "mail_message", length: 1000 }),
    __metadata("design:type", String)
], Mail.prototype, "mailMessage", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { name: "unread", default: () => "'1'" }),
    __metadata("design:type", Number)
], Mail.prototype, "unread", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "attached_item_id" }),
    __metadata("design:type", Number)
], Mail.prototype, "attachedItemId", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "attached_kinah_count" }),
    __metadata("design:type", String)
], Mail.prototype, "attachedKinahCount", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { name: "express", default: () => "'0'" }),
    __metadata("design:type", Number)
], Mail.prototype, "express", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", {
        name: "recieved_time",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], Mail.prototype, "recievedTime", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "attached_ap_count" }),
    __metadata("design:type", String)
], Mail.prototype, "attachedApCount", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Players_1.Players, (players) => players.mail, {
        onDelete: "CASCADE",
        onUpdate: "RESTRICT",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "mail_recipient_id", referencedColumnName: "id" }]),
    __metadata("design:type", Players_1.Players)
], Mail.prototype, "mailRecipient", void 0);
Mail = __decorate([
    (0, typeorm_1.Index)("mail_recipient_id", ["mailRecipientId"], {}),
    (0, typeorm_1.Entity)("mail", { schema: "beritra" })
], Mail);
exports.Mail = Mail;
//# sourceMappingURL=Mail.js.map