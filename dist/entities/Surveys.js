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
exports.Surveys = void 0;
const typeorm_1 = require("typeorm");
const Players_1 = require("./Players");
let Surveys = class Surveys {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "unique_id" }),
    __metadata("design:type", Number)
], Surveys.prototype, "uniqueId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "owner_id" }),
    __metadata("design:type", Number)
], Surveys.prototype, "ownerId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "item_id" }),
    __metadata("design:type", Number)
], Surveys.prototype, "itemId", void 0);
__decorate([
    (0, typeorm_1.Column)("decimal", {
        name: "item_count",
        precision: 20,
        scale: 0,
        default: () => "'1'",
    }),
    __metadata("design:type", String)
], Surveys.prototype, "itemCount", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "html_text" }),
    __metadata("design:type", String)
], Surveys.prototype, "htmlText", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "html_radio",
        length: 100,
        default: () => "'accept'",
    }),
    __metadata("design:type", String)
], Surveys.prototype, "htmlRadio", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { name: "used", width: 1, default: () => "'0'" }),
    __metadata("design:type", Boolean)
], Surveys.prototype, "used", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "used_time", length: 100, default: () => "''" }),
    __metadata("design:type", String)
], Surveys.prototype, "usedTime", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Players_1.Players, (players) => players.surveys, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "owner_id", referencedColumnName: "id" }]),
    __metadata("design:type", Players_1.Players)
], Surveys.prototype, "owner", void 0);
Surveys = __decorate([
    (0, typeorm_1.Index)("owner_id", ["ownerId"], {}),
    (0, typeorm_1.Entity)("surveys", { schema: "beritra" })
], Surveys);
exports.Surveys = Surveys;
//# sourceMappingURL=Surveys.js.map