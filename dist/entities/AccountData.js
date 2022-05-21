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
exports.AccountData = void 0;
const typeorm_1 = require("typeorm");
let AccountData = class AccountData {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "id" }),
    __metadata("design:type", Number)
], AccountData.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "name", unique: true, length: 45 }),
    __metadata("design:type", String)
], AccountData.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "password", length: 65 }),
    __metadata("design:type", String)
], AccountData.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { name: "activated", width: 1, default: () => "'1'" }),
    __metadata("design:type", Boolean)
], AccountData.prototype, "activated", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { name: "access_level", default: () => "'0'" }),
    __metadata("design:type", Number)
], AccountData.prototype, "accessLevel", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { name: "membership", default: () => "'0'" }),
    __metadata("design:type", Number)
], AccountData.prototype, "membership", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { name: "old_membership", default: () => "'0'" }),
    __metadata("design:type", Number)
], AccountData.prototype, "oldMembership", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { name: "last_server", default: () => "'-1'" }),
    __metadata("design:type", Number)
], AccountData.prototype, "lastServer", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "last_ip", nullable: true, length: 20 }),
    __metadata("design:type", String)
], AccountData.prototype, "lastIp", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "ip_force", nullable: true, length: 20 }),
    __metadata("design:type", String)
], AccountData.prototype, "ipForce", void 0);
__decorate([
    (0, typeorm_1.Column)("int", {
        name: "reward_points",
        nullable: true,
        default: () => "'0'",
    }),
    __metadata("design:type", Number)
], AccountData.prototype, "rewardPoints", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "expire", nullable: true }),
    __metadata("design:type", String)
], AccountData.prototype, "expire", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "toll", default: () => "'0'" }),
    __metadata("design:type", Number)
], AccountData.prototype, "toll", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "email", nullable: true, length: 60 }),
    __metadata("design:type", String)
], AccountData.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "address", nullable: true, length: 20 }),
    __metadata("design:type", String)
], AccountData.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "last_mac",
        length: 20,
        default: () => "'xx-xx-xx-xx-xx-xx'",
    }),
    __metadata("design:type", String)
], AccountData.prototype, "lastMac", void 0);
__decorate([
    (0, typeorm_1.Column)("float", { name: "balance", precision: 12, default: () => "'0'" }),
    __metadata("design:type", Number)
], AccountData.prototype, "balance", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "luna", default: () => "'0'" }),
    __metadata("design:type", Number)
], AccountData.prototype, "luna", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "vote", default: () => "'0'" }),
    __metadata("design:type", Number)
], AccountData.prototype, "vote", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "remember_token", nullable: true, length: 100 }),
    __metadata("design:type", String)
], AccountData.prototype, "rememberToken", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", { name: "created_at", nullable: true }),
    __metadata("design:type", Date)
], AccountData.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], AccountData.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "rewarded_status", default: () => "'0'" }),
    __metadata("design:type", Number)
], AccountData.prototype, "rewardedStatus", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "jumping", default: () => "'0'" }),
    __metadata("design:type", Number)
], AccountData.prototype, "jumping", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { name: "free_jumping", width: 1, default: () => "'0'" }),
    __metadata("design:type", Boolean)
], AccountData.prototype, "freeJumping", void 0);
__decorate([
    (0, typeorm_1.Column)("char", { name: "hash", nullable: true, length: 50 }),
    __metadata("design:type", String)
], AccountData.prototype, "hash", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "discord_id", nullable: true }),
    __metadata("design:type", Number)
], AccountData.prototype, "discird_id", void 0);
__decorate([
    (0, typeorm_1.Column)("char", {
        name: "confirmed",
        nullable: true,
        length: 50,
        default: () => "'0'",
    }),
    __metadata("design:type", String)
], AccountData.prototype, "confirmed", void 0);
AccountData = __decorate([
    (0, typeorm_1.Index)("name", ["name"], { unique: true }),
    (0, typeorm_1.Entity)("account_data", { schema: "beritra" })
], AccountData);
exports.AccountData = AccountData;
//# sourceMappingURL=AccountData.js.map