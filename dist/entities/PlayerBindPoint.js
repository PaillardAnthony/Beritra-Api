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
exports.PlayerBindPoint = void 0;
const typeorm_1 = require("typeorm");
const Players_1 = require("./Players");
let PlayerBindPoint = class PlayerBindPoint {
};
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "player_id" }),
    __metadata("design:type", Number)
], PlayerBindPoint.prototype, "playerId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "map_id" }),
    __metadata("design:type", Number)
], PlayerBindPoint.prototype, "mapId", void 0);
__decorate([
    (0, typeorm_1.Column)("float", { name: "x", precision: 12 }),
    __metadata("design:type", Number)
], PlayerBindPoint.prototype, "x", void 0);
__decorate([
    (0, typeorm_1.Column)("float", { name: "y", precision: 12 }),
    __metadata("design:type", Number)
], PlayerBindPoint.prototype, "y", void 0);
__decorate([
    (0, typeorm_1.Column)("float", { name: "z", precision: 12 }),
    __metadata("design:type", Number)
], PlayerBindPoint.prototype, "z", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "heading" }),
    __metadata("design:type", Number)
], PlayerBindPoint.prototype, "heading", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Players_1.Players, (players) => players.playerBindPoint, {
        onDelete: "CASCADE",
        onUpdate: "RESTRICT",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "player_id", referencedColumnName: "id" }]),
    __metadata("design:type", Players_1.Players)
], PlayerBindPoint.prototype, "player", void 0);
PlayerBindPoint = __decorate([
    (0, typeorm_1.Entity)("player_bind_point", { schema: "beritra" })
], PlayerBindPoint);
exports.PlayerBindPoint = PlayerBindPoint;
//# sourceMappingURL=PlayerBindPoint.js.map