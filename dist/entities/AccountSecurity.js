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
exports.AccountSecurity = void 0;
const typeorm_1 = require("typeorm");
let AccountSecurity = class AccountSecurity {
};
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "id" }),
    __metadata("design:type", Number)
], AccountSecurity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", {
        name: "email_confirmed",
        width: 1,
        default: () => "'0'",
    }),
    __metadata("design:type", Boolean)
], AccountSecurity.prototype, "emailConfirmed", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "email_confirm_date", nullable: true }),
    __metadata("design:type", Date)
], AccountSecurity.prototype, "emailConfirmDate", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "question_1", nullable: true, length: 100 }),
    __metadata("design:type", String)
], AccountSecurity.prototype, "question_1", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "answer_1", nullable: true, length: 50 }),
    __metadata("design:type", String)
], AccountSecurity.prototype, "answer_1", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "question_2", nullable: true, length: 100 }),
    __metadata("design:type", String)
], AccountSecurity.prototype, "question_2", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "answer_2", nullable: true, length: 50 }),
    __metadata("design:type", String)
], AccountSecurity.prototype, "answer_2", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "questions_date", nullable: true }),
    __metadata("design:type", Date)
], AccountSecurity.prototype, "questionsDate", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "security_pin", nullable: true }),
    __metadata("design:type", Number)
], AccountSecurity.prototype, "securityPin", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "security_pin_date", nullable: true }),
    __metadata("design:type", Date)
], AccountSecurity.prototype, "securityPinDate", void 0);
AccountSecurity = __decorate([
    (0, typeorm_1.Entity)("account_security", { schema: "beritra" })
], AccountSecurity);
exports.AccountSecurity = AccountSecurity;
//# sourceMappingURL=AccountSecurity.js.map