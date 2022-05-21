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
exports.LadderPlayer = void 0;
const typeorm_1 = require("typeorm");
let LadderPlayer = class LadderPlayer {
};
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "player_id" }),
    __metadata("design:type", Number)
], LadderPlayer.prototype, "playerId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "rating", nullable: true, default: () => "'1000'" }),
    __metadata("design:type", Number)
], LadderPlayer.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "wins", nullable: true }),
    __metadata("design:type", Number)
], LadderPlayer.prototype, "wins", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "losses", nullable: true }),
    __metadata("design:type", Number)
], LadderPlayer.prototype, "losses", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "leaves", nullable: true }),
    __metadata("design:type", Number)
], LadderPlayer.prototype, "leaves", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "rank", default: () => "'-1'" }),
    __metadata("design:type", Number)
], LadderPlayer.prototype, "rank", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "last_rank", default: () => "'-1'" }),
    __metadata("design:type", Number)
], LadderPlayer.prototype, "lastRank", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", { name: "last_update", nullable: true }),
    __metadata("design:type", Date)
], LadderPlayer.prototype, "lastUpdate", void 0);
LadderPlayer = __decorate([
    (0, typeorm_1.Entity)("ladder_player", { schema: "beritra" })
], LadderPlayer);
exports.LadderPlayer = LadderPlayer;
//# sourceMappingURL=LadderPlayer.js.map