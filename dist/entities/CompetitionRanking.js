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
exports.CompetitionRanking = void 0;
const typeorm_1 = require("typeorm");
let CompetitionRanking = class CompetitionRanking {
};
__decorate([
    (0, typeorm_1.Column)("int", { name: "player_id" }),
    __metadata("design:type", Number)
], CompetitionRanking.prototype, "playerId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "table_id" }),
    __metadata("design:type", Number)
], CompetitionRanking.prototype, "tableId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "rank", default: () => "'0'" }),
    __metadata("design:type", Number)
], CompetitionRanking.prototype, "rank", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "last_rank", default: () => "'0'" }),
    __metadata("design:type", Number)
], CompetitionRanking.prototype, "lastRank", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "points", default: () => "'0'" }),
    __metadata("design:type", Number)
], CompetitionRanking.prototype, "points", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "last_points", default: () => "'0'" }),
    __metadata("design:type", Number)
], CompetitionRanking.prototype, "lastPoints", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "high_points", default: () => "'0'" }),
    __metadata("design:type", Number)
], CompetitionRanking.prototype, "highPoints", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "low_points", default: () => "'0'" }),
    __metadata("design:type", Number)
], CompetitionRanking.prototype, "lowPoints", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "position_match", default: () => "'5'" }),
    __metadata("design:type", Number)
], CompetitionRanking.prototype, "positionMatch", void 0);
CompetitionRanking = __decorate([
    (0, typeorm_1.Entity)("competition_ranking", { schema: "beritra" })
], CompetitionRanking);
exports.CompetitionRanking = CompetitionRanking;
//# sourceMappingURL=CompetitionRanking.js.map