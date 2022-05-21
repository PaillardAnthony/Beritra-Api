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
exports.PlayerAtreianBestiary = void 0;
const typeorm_1 = require("typeorm");
const Players_1 = require("./Players");
let PlayerAtreianBestiary = class PlayerAtreianBestiary {
};
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "player_id" }),
    __metadata("design:type", Number)
], PlayerAtreianBestiary.prototype, "playerId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "id" }),
    __metadata("design:type", Number)
], PlayerAtreianBestiary.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "kill_count" }),
    __metadata("design:type", Number)
], PlayerAtreianBestiary.prototype, "killCount", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "level" }),
    __metadata("design:type", Number)
], PlayerAtreianBestiary.prototype, "level", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "claim_reward", default: () => "'0'" }),
    __metadata("design:type", Number)
], PlayerAtreianBestiary.prototype, "claimReward", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Players_1.Players, (players) => players.playerAtreianBestiaries, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "player_id", referencedColumnName: "id" }]),
    __metadata("design:type", Players_1.Players)
], PlayerAtreianBestiary.prototype, "player", void 0);
PlayerAtreianBestiary = __decorate([
    (0, typeorm_1.Entity)("player_atreian_bestiary", { schema: "beritra" })
], PlayerAtreianBestiary);
exports.PlayerAtreianBestiary = PlayerAtreianBestiary;
//# sourceMappingURL=PlayerAtreianBestiary.js.map