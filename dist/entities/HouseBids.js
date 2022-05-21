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
exports.HouseBids = void 0;
const typeorm_1 = require("typeorm");
const Houses_1 = require("./Houses");
let HouseBids = class HouseBids {
};
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "player_id" }),
    __metadata("design:type", Number)
], HouseBids.prototype, "playerId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "house_id" }),
    __metadata("design:type", Number)
], HouseBids.prototype, "houseId", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { primary: true, name: "bid" }),
    __metadata("design:type", String)
], HouseBids.prototype, "bid", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", {
        name: "bid_time",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], HouseBids.prototype, "bidTime", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Houses_1.Houses, (houses) => houses.houseBids, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "house_id", referencedColumnName: "id" }]),
    __metadata("design:type", Houses_1.Houses)
], HouseBids.prototype, "house", void 0);
HouseBids = __decorate([
    (0, typeorm_1.Index)("house_id_ibfk_1", ["houseId"], {}),
    (0, typeorm_1.Entity)("house_bids", { schema: "beritra" })
], HouseBids);
exports.HouseBids = HouseBids;
//# sourceMappingURL=HouseBids.js.map