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
exports.StonespearRank = void 0;
const typeorm_1 = require("typeorm");
let StonespearRank = class StonespearRank {
};
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "legion_id" }),
    __metadata("design:type", Number)
], StonespearRank.prototype, "legionId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "territory_id" }),
    __metadata("design:type", Number)
], StonespearRank.prototype, "territoryId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "score" }),
    __metadata("design:type", Number)
], StonespearRank.prototype, "score", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "time" }),
    __metadata("design:type", Number)
], StonespearRank.prototype, "time", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", { name: "date", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], StonespearRank.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "legion_name", length: 500 }),
    __metadata("design:type", String)
], StonespearRank.prototype, "legionName", void 0);
StonespearRank = __decorate([
    (0, typeorm_1.Entity)("stonespear_rank", { schema: "beritra" })
], StonespearRank);
exports.StonespearRank = StonespearRank;
//# sourceMappingURL=StonespearRank.js.map