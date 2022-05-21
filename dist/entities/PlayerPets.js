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
exports.PlayerPets = void 0;
const typeorm_1 = require("typeorm");
const Players_1 = require("./Players");
let PlayerPets = class PlayerPets {
};
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "player_id" }),
    __metadata("design:type", Number)
], PlayerPets.prototype, "playerId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "pet_id" }),
    __metadata("design:type", Number)
], PlayerPets.prototype, "petId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "decoration" }),
    __metadata("design:type", Number)
], PlayerPets.prototype, "decoration", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "name", length: 255 }),
    __metadata("design:type", String)
], PlayerPets.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { name: "hungry_level", default: () => "'0'" }),
    __metadata("design:type", Number)
], PlayerPets.prototype, "hungryLevel", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "feed_progress", default: () => "'0'" }),
    __metadata("design:type", Number)
], PlayerPets.prototype, "feedProgress", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "reuse_time", default: () => "'0'" }),
    __metadata("design:type", String)
], PlayerPets.prototype, "reuseTime", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", { name: "birthday", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], PlayerPets.prototype, "birthday", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "mood_started", default: () => "'0'" }),
    __metadata("design:type", String)
], PlayerPets.prototype, "moodStarted", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "counter", default: () => "'0'" }),
    __metadata("design:type", Number)
], PlayerPets.prototype, "counter", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "mood_cd_started", default: () => "'0'" }),
    __metadata("design:type", String)
], PlayerPets.prototype, "moodCdStarted", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "gift_cd_started", default: () => "'0'" }),
    __metadata("design:type", String)
], PlayerPets.prototype, "giftCdStarted", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "dopings", nullable: true, length: 80 }),
    __metadata("design:type", String)
], PlayerPets.prototype, "dopings", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", { name: "despawn_time", nullable: true }),
    __metadata("design:type", Date)
], PlayerPets.prototype, "despawnTime", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "expire_time" }),
    __metadata("design:type", Number)
], PlayerPets.prototype, "expireTime", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Players_1.Players, (players) => players.playerPets, {
        onDelete: "CASCADE",
        onUpdate: "RESTRICT",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "player_id", referencedColumnName: "id" }]),
    __metadata("design:type", Players_1.Players)
], PlayerPets.prototype, "player", void 0);
PlayerPets = __decorate([
    (0, typeorm_1.Entity)("player_pets", { schema: "beritra" })
], PlayerPets);
exports.PlayerPets = PlayerPets;
//# sourceMappingURL=PlayerPets.js.map