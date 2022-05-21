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
exports.LegionEmblems = void 0;
const typeorm_1 = require("typeorm");
const Legions_1 = require("./Legions");
let LegionEmblems = class LegionEmblems {
};
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "legion_id" }),
    __metadata("design:type", Number)
], LegionEmblems.prototype, "legionId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "emblem_id", default: () => "'0'" }),
    __metadata("design:type", Number)
], LegionEmblems.prototype, "emblemId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "color_r", default: () => "'0'" }),
    __metadata("design:type", Number)
], LegionEmblems.prototype, "colorR", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "color_g", default: () => "'0'" }),
    __metadata("design:type", Number)
], LegionEmblems.prototype, "colorG", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "color_b", default: () => "'0'" }),
    __metadata("design:type", Number)
], LegionEmblems.prototype, "colorB", void 0);
__decorate([
    (0, typeorm_1.Column)("enum", {
        name: "emblem_type",
        enum: ["DEFAULT", "CUSTOM"],
        default: () => "'DEFAULT'",
    }),
    __metadata("design:type", String)
], LegionEmblems.prototype, "emblemType", void 0);
__decorate([
    (0, typeorm_1.Column)("longblob", { name: "emblem_data", nullable: true }),
    __metadata("design:type", Buffer)
], LegionEmblems.prototype, "emblemData", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Legions_1.Legions, (legions) => legions.legionEmblems, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "legion_id", referencedColumnName: "id" }]),
    __metadata("design:type", Legions_1.Legions)
], LegionEmblems.prototype, "legion", void 0);
LegionEmblems = __decorate([
    (0, typeorm_1.Entity)("legion_emblems", { schema: "beritra" })
], LegionEmblems);
exports.LegionEmblems = LegionEmblems;
//# sourceMappingURL=LegionEmblems.js.map