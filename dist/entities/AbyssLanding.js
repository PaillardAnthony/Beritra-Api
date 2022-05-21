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
exports.AbyssLanding = void 0;
const typeorm_1 = require("typeorm");
let AbyssLanding = class AbyssLanding {
};
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "id" }),
    __metadata("design:type", Number)
], AbyssLanding.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "level", default: () => "'1'" }),
    __metadata("design:type", Number)
], AbyssLanding.prototype, "level", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "points", default: () => "'0'" }),
    __metadata("design:type", Number)
], AbyssLanding.prototype, "points", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "siege", default: () => "'0'" }),
    __metadata("design:type", Number)
], AbyssLanding.prototype, "siege", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "commander", default: () => "'0'" }),
    __metadata("design:type", Number)
], AbyssLanding.prototype, "commander", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "artefact", default: () => "'0'" }),
    __metadata("design:type", Number)
], AbyssLanding.prototype, "artefact", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "base", default: () => "'0'" }),
    __metadata("design:type", Number)
], AbyssLanding.prototype, "base", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "monuments", default: () => "'0'" }),
    __metadata("design:type", Number)
], AbyssLanding.prototype, "monuments", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "quest", default: () => "'0'" }),
    __metadata("design:type", Number)
], AbyssLanding.prototype, "quest", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "facility", default: () => "'0'" }),
    __metadata("design:type", Number)
], AbyssLanding.prototype, "facility", void 0);
__decorate([
    (0, typeorm_1.Column)("enum", { name: "race", enum: ["ELYOS", "ASMODIANS"] }),
    __metadata("design:type", String)
], AbyssLanding.prototype, "race", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", {
        name: "level_up_date",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], AbyssLanding.prototype, "levelUpDate", void 0);
AbyssLanding = __decorate([
    (0, typeorm_1.Entity)("abyss_landing", { schema: "beritra" })
], AbyssLanding);
exports.AbyssLanding = AbyssLanding;
//# sourceMappingURL=AbyssLanding.js.map