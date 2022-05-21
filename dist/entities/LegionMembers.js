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
exports.LegionMembers = void 0;
const typeorm_1 = require("typeorm");
const Players_1 = require("./Players");
const Legions_1 = require("./Legions");
let LegionMembers = class LegionMembers {
};
__decorate([
    (0, typeorm_1.Column)("int", { name: "legion_id" }),
    __metadata("design:type", Number)
], LegionMembers.prototype, "legionId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "player_id" }),
    __metadata("design:type", Number)
], LegionMembers.prototype, "playerId", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "nickname", length: 10, default: () => "''" }),
    __metadata("design:type", String)
], LegionMembers.prototype, "nickname", void 0);
__decorate([
    (0, typeorm_1.Column)("enum", {
        name: "rank",
        enum: ["BRIGADE_GENERAL", "CENTURION", "LEGIONARY", "DEPUTY", "VOLUNTEER"],
        default: () => "'VOLUNTEER'",
    }),
    __metadata("design:type", String)
], LegionMembers.prototype, "rank", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "selfintro",
        nullable: true,
        length: 32,
        default: () => "''",
    }),
    __metadata("design:type", String)
], LegionMembers.prototype, "selfintro", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "challenge_score", default: () => "'0'" }),
    __metadata("design:type", Number)
], LegionMembers.prototype, "challengeScore", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Players_1.Players, (players) => players.legionMembers, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "player_id", referencedColumnName: "id" }]),
    __metadata("design:type", Players_1.Players)
], LegionMembers.prototype, "player", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Legions_1.Legions, (legions) => legions.legionMembers, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "legion_id", referencedColumnName: "id" }]),
    __metadata("design:type", Legions_1.Legions)
], LegionMembers.prototype, "legion", void 0);
LegionMembers = __decorate([
    (0, typeorm_1.Index)("player_id", ["playerId"], {}),
    (0, typeorm_1.Index)("legion_id", ["legionId"], {}),
    (0, typeorm_1.Entity)("legion_members", { schema: "beritra" })
], LegionMembers);
exports.LegionMembers = LegionMembers;
//# sourceMappingURL=LegionMembers.js.map