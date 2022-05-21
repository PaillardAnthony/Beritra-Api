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
exports.PlayerGameStats = void 0;
const typeorm_1 = require("typeorm");
const Players_1 = require("./Players");
let PlayerGameStats = class PlayerGameStats {
};
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "player_id" }),
    __metadata("design:type", Number)
], PlayerGameStats.prototype, "playerId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "defense_physic", default: () => "'1'" }),
    __metadata("design:type", Number)
], PlayerGameStats.prototype, "defensePhysic", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "block", default: () => "'1'" }),
    __metadata("design:type", Number)
], PlayerGameStats.prototype, "block", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "parry", default: () => "'1'" }),
    __metadata("design:type", Number)
], PlayerGameStats.prototype, "parry", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "magical_critical", default: () => "'1'" }),
    __metadata("design:type", Number)
], PlayerGameStats.prototype, "magicalCritical", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "evasion", default: () => "'1'" }),
    __metadata("design:type", Number)
], PlayerGameStats.prototype, "evasion", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "precision", default: () => "'1'" }),
    __metadata("design:type", Number)
], PlayerGameStats.prototype, "precision", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "attack", default: () => "'1'" }),
    __metadata("design:type", Number)
], PlayerGameStats.prototype, "attack", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "magical_precision", default: () => "'1'" }),
    __metadata("design:type", Number)
], PlayerGameStats.prototype, "magicalPrecision", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "attack_speed", default: () => "'1'" }),
    __metadata("design:type", Number)
], PlayerGameStats.prototype, "attackSpeed", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "magical_resist", default: () => "'1'" }),
    __metadata("design:type", Number)
], PlayerGameStats.prototype, "magicalResist", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "magical_attack", default: () => "'1'" }),
    __metadata("design:type", Number)
], PlayerGameStats.prototype, "magicalAttack", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "main_hand_magical_attack", default: () => "'1'" }),
    __metadata("design:type", Number)
], PlayerGameStats.prototype, "mainHandMagicalAttack", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "off_hand_magical_attack", default: () => "'1'" }),
    __metadata("design:type", Number)
], PlayerGameStats.prototype, "offHandMagicalAttack", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "physical_critical", default: () => "'1'" }),
    __metadata("design:type", Number)
], PlayerGameStats.prototype, "physicalCritical", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "attack_range", default: () => "'1'" }),
    __metadata("design:type", Number)
], PlayerGameStats.prototype, "attackRange", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "magical_defense", default: () => "'1'" }),
    __metadata("design:type", Number)
], PlayerGameStats.prototype, "magicalDefense", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "agility", default: () => "'1'" }),
    __metadata("design:type", Number)
], PlayerGameStats.prototype, "agility", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "knowledge", default: () => "'1'" }),
    __metadata("design:type", Number)
], PlayerGameStats.prototype, "knowledge", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "will", default: () => "'1'" }),
    __metadata("design:type", Number)
], PlayerGameStats.prototype, "will", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "magical_boost", default: () => "'1'" }),
    __metadata("design:type", Number)
], PlayerGameStats.prototype, "magicalBoost", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "magical_boost_resist", default: () => "'1'" }),
    __metadata("design:type", Number)
], PlayerGameStats.prototype, "magicalBoostResist", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "physical_critical_resist", default: () => "'1'" }),
    __metadata("design:type", Number)
], PlayerGameStats.prototype, "physicalCriticalResist", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "magical_critical_resist", default: () => "'1'" }),
    __metadata("design:type", Number)
], PlayerGameStats.prototype, "magicalCriticalResist", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Players_1.Players, (players) => players.playerGameStats, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "player_id", referencedColumnName: "id" }]),
    __metadata("design:type", Players_1.Players)
], PlayerGameStats.prototype, "player", void 0);
PlayerGameStats = __decorate([
    (0, typeorm_1.Entity)("player_game_stats", { schema: "beritra" })
], PlayerGameStats);
exports.PlayerGameStats = PlayerGameStats;
//# sourceMappingURL=PlayerGameStats.js.map