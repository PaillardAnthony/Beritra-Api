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
exports.Houses = void 0;
const typeorm_1 = require("typeorm");
const HouseBids_1 = require("./HouseBids");
const HouseScripts_1 = require("./HouseScripts");
let Houses = class Houses {
};
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "id" }),
    __metadata("design:type", Number)
], Houses.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "player_id", default: () => "'0'" }),
    __metadata("design:type", Number)
], Houses.prototype, "playerId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "building_id" }),
    __metadata("design:type", Number)
], Houses.prototype, "buildingId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "address" }),
    __metadata("design:type", Number)
], Houses.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", {
        name: "acquire_time",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], Houses.prototype, "acquireTime", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "settings", default: () => "'0'" }),
    __metadata("design:type", Number)
], Houses.prototype, "settings", void 0);
__decorate([
    (0, typeorm_1.Column)("enum", {
        name: "status",
        enum: ["ACTIVE", "SELL_WAIT", "INACTIVE", "NOSALE"],
        default: () => "'ACTIVE'",
    }),
    __metadata("design:type", String)
], Houses.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { name: "fee_paid", width: 1, default: () => "'1'" }),
    __metadata("design:type", Boolean)
], Houses.prototype, "feePaid", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", { name: "next_pay", nullable: true }),
    __metadata("design:type", Date)
], Houses.prototype, "nextPay", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", { name: "sell_started", nullable: true }),
    __metadata("design:type", Date)
], Houses.prototype, "sellStarted", void 0);
__decorate([
    (0, typeorm_1.Column)("binary", { name: "sign_notice", nullable: true, length: 130 }),
    __metadata("design:type", Buffer)
], Houses.prototype, "signNotice", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => HouseBids_1.HouseBids, (houseBids) => houseBids.house),
    __metadata("design:type", Array)
], Houses.prototype, "houseBids", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => HouseScripts_1.HouseScripts, (houseScripts) => houseScripts.house),
    __metadata("design:type", Array)
], Houses.prototype, "houseScripts", void 0);
Houses = __decorate([
    (0, typeorm_1.Index)("address", ["address"], {}),
    (0, typeorm_1.Entity)("houses", { schema: "beritra" })
], Houses);
exports.Houses = Houses;
//# sourceMappingURL=Houses.js.map