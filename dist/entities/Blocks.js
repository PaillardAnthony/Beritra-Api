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
exports.Blocks = void 0;
const typeorm_1 = require("typeorm");
const Players_1 = require("./Players");
let Blocks = class Blocks {
};
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "player" }),
    __metadata("design:type", Number)
], Blocks.prototype, "player", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "blocked_player" }),
    __metadata("design:type", Number)
], Blocks.prototype, "blockedPlayer", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "reason", length: 100, default: () => "''" }),
    __metadata("design:type", String)
], Blocks.prototype, "reason", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Players_1.Players, (players) => players.blocks, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "player", referencedColumnName: "id" }]),
    __metadata("design:type", Players_1.Players)
], Blocks.prototype, "player2", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Players_1.Players, (players) => players.blocks2, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "blocked_player", referencedColumnName: "id" }]),
    __metadata("design:type", Players_1.Players)
], Blocks.prototype, "blockedPlayer2", void 0);
Blocks = __decorate([
    (0, typeorm_1.Index)("blocked_player", ["blockedPlayer"], {}),
    (0, typeorm_1.Entity)("blocks", { schema: "beritra" })
], Blocks);
exports.Blocks = Blocks;
//# sourceMappingURL=Blocks.js.map