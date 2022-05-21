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
exports.AccountTime = void 0;
const typeorm_1 = require("typeorm");
let AccountTime = class AccountTime {
};
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "account_id" }),
    __metadata("design:type", Number)
], AccountTime.prototype, "accountId", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", {
        name: "last_active",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], AccountTime.prototype, "lastActive", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", { name: "expiration_time", nullable: true }),
    __metadata("design:type", Date)
], AccountTime.prototype, "expirationTime", void 0);
__decorate([
    (0, typeorm_1.Column)("int", {
        name: "session_duration",
        nullable: true,
        default: () => "'0'",
    }),
    __metadata("design:type", Number)
], AccountTime.prototype, "sessionDuration", void 0);
__decorate([
    (0, typeorm_1.Column)("int", {
        name: "accumulated_online",
        nullable: true,
        default: () => "'0'",
    }),
    __metadata("design:type", Number)
], AccountTime.prototype, "accumulatedOnline", void 0);
__decorate([
    (0, typeorm_1.Column)("int", {
        name: "accumulated_rest",
        nullable: true,
        default: () => "'0'",
    }),
    __metadata("design:type", Number)
], AccountTime.prototype, "accumulatedRest", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", { name: "penalty_end", nullable: true }),
    __metadata("design:type", Date)
], AccountTime.prototype, "penaltyEnd", void 0);
AccountTime = __decorate([
    (0, typeorm_1.Entity)("account_time", { schema: "beritra" })
], AccountTime);
exports.AccountTime = AccountTime;
//# sourceMappingURL=AccountTime.js.map