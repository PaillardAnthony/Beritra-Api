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
exports.OldNames = void 0;
const typeorm_1 = require("typeorm");
const Players_1 = require("./Players");
let OldNames = class OldNames {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "id", unsigned: true }),
    __metadata("design:type", Number)
], OldNames.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "player_id" }),
    __metadata("design:type", Number)
], OldNames.prototype, "playerId", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "old_name", length: 50 }),
    __metadata("design:type", String)
], OldNames.prototype, "oldName", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "new_name", length: 50 }),
    __metadata("design:type", String)
], OldNames.prototype, "newName", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Players_1.Players, (players) => players.oldNames, {
        onDelete: "CASCADE",
        onUpdate: "RESTRICT",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "player_id", referencedColumnName: "id" }]),
    __metadata("design:type", Players_1.Players)
], OldNames.prototype, "player", void 0);
OldNames = __decorate([
    (0, typeorm_1.Index)("player_id", ["playerId"], {}),
    (0, typeorm_1.Entity)("old_names", { schema: "beritra" })
], OldNames);
exports.OldNames = OldNames;
//# sourceMappingURL=OldNames.js.map