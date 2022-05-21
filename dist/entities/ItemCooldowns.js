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
exports.ItemCooldowns = void 0;
const typeorm_1 = require("typeorm");
const Players_1 = require("./Players");
let ItemCooldowns = class ItemCooldowns {
};
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "player_id" }),
    __metadata("design:type", Number)
], ItemCooldowns.prototype, "playerId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "delay_id" }),
    __metadata("design:type", Number)
], ItemCooldowns.prototype, "delayId", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "use_delay", unsigned: true }),
    __metadata("design:type", Number)
], ItemCooldowns.prototype, "useDelay", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "reuse_time" }),
    __metadata("design:type", String)
], ItemCooldowns.prototype, "reuseTime", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Players_1.Players, (players) => players.itemCooldowns, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "player_id", referencedColumnName: "id" }]),
    __metadata("design:type", Players_1.Players)
], ItemCooldowns.prototype, "player", void 0);
ItemCooldowns = __decorate([
    (0, typeorm_1.Entity)("item_cooldowns", { schema: "beritra" })
], ItemCooldowns);
exports.ItemCooldowns = ItemCooldowns;
//# sourceMappingURL=ItemCooldowns.js.map