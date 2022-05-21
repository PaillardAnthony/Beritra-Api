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
exports.AccountRewards = void 0;
const typeorm_1 = require("typeorm");
let AccountRewards = class AccountRewards {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "uniqId" }),
    __metadata("design:type", Number)
], AccountRewards.prototype, "uniqId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "accountId" }),
    __metadata("design:type", Number)
], AccountRewards.prototype, "accountId", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "added", length: 70, default: () => "''" }),
    __metadata("design:type", String)
], AccountRewards.prototype, "added", void 0);
__decorate([
    (0, typeorm_1.Column)("decimal", {
        name: "points",
        precision: 20,
        scale: 0,
        default: () => "'0'",
    }),
    __metadata("design:type", String)
], AccountRewards.prototype, "points", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "received", length: 70, default: () => "'0'" }),
    __metadata("design:type", String)
], AccountRewards.prototype, "received", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { name: "rewarded", width: 1, default: () => "'0'" }),
    __metadata("design:type", Boolean)
], AccountRewards.prototype, "rewarded", void 0);
__decorate([
    (0, typeorm_1.Column)("decimal", {
        name: "luna",
        precision: 20,
        scale: 0,
        default: () => "'0'",
    }),
    __metadata("design:type", String)
], AccountRewards.prototype, "luna", void 0);
AccountRewards = __decorate([
    (0, typeorm_1.Entity)("account_rewards", { schema: "beritra" })
], AccountRewards);
exports.AccountRewards = AccountRewards;
//# sourceMappingURL=AccountRewards.js.map