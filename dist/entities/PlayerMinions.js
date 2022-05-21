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
exports.PlayerMinions = void 0;
const typeorm_1 = require("typeorm");
let PlayerMinions = class PlayerMinions {
};
__decorate([
    (0, typeorm_1.Column)("int", { name: "player_id" }),
    __metadata("design:type", Number)
], PlayerMinions.prototype, "playerId", void 0);
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "object_id" }),
    __metadata("design:type", Number)
], PlayerMinions.prototype, "objectId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "minion_id" }),
    __metadata("design:type", Number)
], PlayerMinions.prototype, "minionId", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "name", length: 255 }),
    __metadata("design:type", String)
], PlayerMinions.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "grade", length: 11 }),
    __metadata("design:type", String)
], PlayerMinions.prototype, "grade", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "level", length: 11 }),
    __metadata("design:type", String)
], PlayerMinions.prototype, "level", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", { name: "birthday", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], PlayerMinions.prototype, "birthday", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "growth_points", default: () => "'0'" }),
    __metadata("design:type", Number)
], PlayerMinions.prototype, "growthPoints", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "is_lock", default: () => "'1'" }),
    __metadata("design:type", String)
], PlayerMinions.prototype, "isLock", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", { name: "despawn_time", nullable: true }),
    __metadata("design:type", Date)
], PlayerMinions.prototype, "despawnTime", void 0);
PlayerMinions = __decorate([
    (0, typeorm_1.Entity)("player_minions", { schema: "beritra" })
], PlayerMinions);
exports.PlayerMinions = PlayerMinions;
//# sourceMappingURL=PlayerMinions.js.map