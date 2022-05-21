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
exports.PlayerRegisteredItems = void 0;
const typeorm_1 = require("typeorm");
const Players_1 = require("./Players");
let PlayerRegisteredItems = class PlayerRegisteredItems {
};
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "player_id" }),
    __metadata("design:type", Number)
], PlayerRegisteredItems.prototype, "playerId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "item_unique_id" }),
    __metadata("design:type", Number)
], PlayerRegisteredItems.prototype, "itemUniqueId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "item_id" }),
    __metadata("design:type", Number)
], PlayerRegisteredItems.prototype, "itemId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "expire_time", nullable: true }),
    __metadata("design:type", Number)
], PlayerRegisteredItems.prototype, "expireTime", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "color", nullable: true }),
    __metadata("design:type", Number)
], PlayerRegisteredItems.prototype, "color", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "color_expires", default: () => "'0'" }),
    __metadata("design:type", Number)
], PlayerRegisteredItems.prototype, "colorExpires", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "owner_use_count", default: () => "'0'" }),
    __metadata("design:type", Number)
], PlayerRegisteredItems.prototype, "ownerUseCount", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "visitor_use_count", default: () => "'0'" }),
    __metadata("design:type", Number)
], PlayerRegisteredItems.prototype, "visitorUseCount", void 0);
__decorate([
    (0, typeorm_1.Column)("float", { name: "x", precision: 12, default: () => "'0'" }),
    __metadata("design:type", Number)
], PlayerRegisteredItems.prototype, "x", void 0);
__decorate([
    (0, typeorm_1.Column)("float", { name: "y", precision: 12, default: () => "'0'" }),
    __metadata("design:type", Number)
], PlayerRegisteredItems.prototype, "y", void 0);
__decorate([
    (0, typeorm_1.Column)("float", { name: "z", precision: 12, default: () => "'0'" }),
    __metadata("design:type", Number)
], PlayerRegisteredItems.prototype, "z", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "h", nullable: true }),
    __metadata("design:type", Number)
], PlayerRegisteredItems.prototype, "h", void 0);
__decorate([
    (0, typeorm_1.Column)("enum", {
        name: "area",
        enum: ["NONE", "INTERIOR", "EXTERIOR", "ALL", "DECOR"],
        default: () => "'NONE'",
    }),
    __metadata("design:type", String)
], PlayerRegisteredItems.prototype, "area", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { name: "floor", default: () => "'0'" }),
    __metadata("design:type", Number)
], PlayerRegisteredItems.prototype, "floor", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Players_1.Players, (players) => players.playerRegisteredItems, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "player_id", referencedColumnName: "id" }]),
    __metadata("design:type", Players_1.Players)
], PlayerRegisteredItems.prototype, "player", void 0);
PlayerRegisteredItems = __decorate([
    (0, typeorm_1.Entity)("player_registered_items", { schema: "beritra" })
], PlayerRegisteredItems);
exports.PlayerRegisteredItems = PlayerRegisteredItems;
//# sourceMappingURL=PlayerRegisteredItems.js.map