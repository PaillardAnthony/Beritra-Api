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
exports.AbyssRank = void 0;
const typeorm_1 = require("typeorm");
const Players_1 = require("./Players");
let AbyssRank = class AbyssRank {
};
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "player_id" }),
    __metadata("design:type", Number)
], AbyssRank.prototype, "playerId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "daily_ap" }),
    __metadata("design:type", Number)
], AbyssRank.prototype, "dailyAp", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "daily_gp" }),
    __metadata("design:type", Number)
], AbyssRank.prototype, "dailyGp", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "weekly_ap" }),
    __metadata("design:type", Number)
], AbyssRank.prototype, "weeklyAp", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "weekly_gp" }),
    __metadata("design:type", Number)
], AbyssRank.prototype, "weeklyGp", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "ap" }),
    __metadata("design:type", Number)
], AbyssRank.prototype, "ap", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "gp" }),
    __metadata("design:type", Number)
], AbyssRank.prototype, "gp", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "rank", default: () => "'1'" }),
    __metadata("design:type", Number)
], AbyssRank.prototype, "rank", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "top_ranking" }),
    __metadata("design:type", Number)
], AbyssRank.prototype, "topRanking", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "daily_kill" }),
    __metadata("design:type", Number)
], AbyssRank.prototype, "dailyKill", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "weekly_kill" }),
    __metadata("design:type", Number)
], AbyssRank.prototype, "weeklyKill", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "all_kill", default: () => "'0'" }),
    __metadata("design:type", Number)
], AbyssRank.prototype, "allKill", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "max_rank", default: () => "'1'" }),
    __metadata("design:type", Number)
], AbyssRank.prototype, "maxRank", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "last_kill" }),
    __metadata("design:type", Number)
], AbyssRank.prototype, "lastKill", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "last_ap" }),
    __metadata("design:type", Number)
], AbyssRank.prototype, "lastAp", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "last_gp" }),
    __metadata("design:type", Number)
], AbyssRank.prototype, "lastGp", void 0);
__decorate([
    (0, typeorm_1.Column)("decimal", { name: "last_update", precision: 20, scale: 0 }),
    __metadata("design:type", String)
], AbyssRank.prototype, "lastUpdate", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "rank_pos", default: () => "'0'" }),
    __metadata("design:type", Number)
], AbyssRank.prototype, "rankPos", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "old_rank_pos", default: () => "'0'" }),
    __metadata("design:type", Number)
], AbyssRank.prototype, "oldRankPos", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "rank_ap", default: () => "'0'" }),
    __metadata("design:type", Number)
], AbyssRank.prototype, "rankAp", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Players_1.Players, (players) => players.abyssRank, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "player_id", referencedColumnName: "id" }]),
    __metadata("design:type", Players_1.Players)
], AbyssRank.prototype, "player", void 0);
AbyssRank = __decorate([
    (0, typeorm_1.Entity)("abyss_rank", { schema: "beritra" })
], AbyssRank);
exports.AbyssRank = AbyssRank;
//# sourceMappingURL=AbyssRank.js.map