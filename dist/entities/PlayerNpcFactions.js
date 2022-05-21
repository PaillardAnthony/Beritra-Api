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
exports.PlayerNpcFactions = void 0;
const typeorm_1 = require("typeorm");
const Players_1 = require("./Players");
let PlayerNpcFactions = class PlayerNpcFactions {
};
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "player_id" }),
    __metadata("design:type", Number)
], PlayerNpcFactions.prototype, "playerId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "faction_id" }),
    __metadata("design:type", Number)
], PlayerNpcFactions.prototype, "factionId", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { name: "active", width: 1 }),
    __metadata("design:type", Boolean)
], PlayerNpcFactions.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "time" }),
    __metadata("design:type", Number)
], PlayerNpcFactions.prototype, "time", void 0);
__decorate([
    (0, typeorm_1.Column)("enum", {
        name: "state",
        enum: ["NOTING", "START", "COMPLETE"],
        default: () => "'NOTING'",
    }),
    __metadata("design:type", String)
], PlayerNpcFactions.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "quest_id", default: () => "'0'" }),
    __metadata("design:type", Number)
], PlayerNpcFactions.prototype, "questId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Players_1.Players, (players) => players.playerNpcFactions, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "player_id", referencedColumnName: "id" }]),
    __metadata("design:type", Players_1.Players)
], PlayerNpcFactions.prototype, "player", void 0);
PlayerNpcFactions = __decorate([
    (0, typeorm_1.Entity)("player_npc_factions", { schema: "beritra" })
], PlayerNpcFactions);
exports.PlayerNpcFactions = PlayerNpcFactions;
//# sourceMappingURL=PlayerNpcFactions.js.map