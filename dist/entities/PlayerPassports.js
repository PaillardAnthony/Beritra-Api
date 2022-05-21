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
exports.PlayerPassports = void 0;
const typeorm_1 = require("typeorm");
let PlayerPassports = class PlayerPassports {
};
__decorate([
    (0, typeorm_1.Column)("int", { name: "account_id" }),
    __metadata("design:type", Number)
], PlayerPassports.prototype, "accountId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "passport_id" }),
    __metadata("design:type", Number)
], PlayerPassports.prototype, "passportId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "stamps", default: () => "'0'" }),
    __metadata("design:type", Number)
], PlayerPassports.prototype, "stamps", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", {
        name: "last_stamp",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], PlayerPassports.prototype, "lastStamp", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { name: "rewarded", width: 1, default: () => "'0'" }),
    __metadata("design:type", Boolean)
], PlayerPassports.prototype, "rewarded", void 0);
PlayerPassports = __decorate([
    (0, typeorm_1.Index)("account_passport", ["accountId", "passportId"], { unique: true }),
    (0, typeorm_1.Entity)("player_passports", { schema: "beritra" })
], PlayerPassports);
exports.PlayerPassports = PlayerPassports;
//# sourceMappingURL=PlayerPassports.js.map