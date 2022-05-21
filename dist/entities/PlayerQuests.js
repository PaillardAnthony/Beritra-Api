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
exports.PlayerQuests = void 0;
const typeorm_1 = require("typeorm");
const Players_1 = require("./Players");
let PlayerQuests = class PlayerQuests {
};
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "player_id" }),
    __metadata("design:type", Number)
], PlayerQuests.prototype, "playerId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", {
        primary: true,
        name: "quest_id",
        unsigned: true,
        default: () => "'0'",
    }),
    __metadata("design:type", Number)
], PlayerQuests.prototype, "questId", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "status", length: 10, default: () => "'NONE'" }),
    __metadata("design:type", String)
], PlayerQuests.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "quest_vars", unsigned: true, default: () => "'0'" }),
    __metadata("design:type", Number)
], PlayerQuests.prototype, "questVars", void 0);
__decorate([
    (0, typeorm_1.Column)("int", {
        name: "complete_count",
        unsigned: true,
        default: () => "'0'",
    }),
    __metadata("design:type", Number)
], PlayerQuests.prototype, "completeCount", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", { name: "complete_time", nullable: true }),
    __metadata("design:type", Date)
], PlayerQuests.prototype, "completeTime", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", { name: "next_repeat_time", nullable: true }),
    __metadata("design:type", Date)
], PlayerQuests.prototype, "nextRepeatTime", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "reward", nullable: true }),
    __metadata("design:type", Number)
], PlayerQuests.prototype, "reward", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Players_1.Players, (players) => players.playerQuests, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "player_id", referencedColumnName: "id" }]),
    __metadata("design:type", Players_1.Players)
], PlayerQuests.prototype, "player", void 0);
PlayerQuests = __decorate([
    (0, typeorm_1.Entity)("player_quests", { schema: "beritra" })
], PlayerQuests);
exports.PlayerQuests = PlayerQuests;
//# sourceMappingURL=PlayerQuests.js.map