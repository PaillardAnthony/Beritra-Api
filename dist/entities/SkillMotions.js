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
exports.SkillMotions = void 0;
const typeorm_1 = require("typeorm");
let SkillMotions = class SkillMotions {
};
__decorate([
    (0, typeorm_1.Column)("varchar", {
        primary: true,
        name: "motion_name",
        length: 255,
        default: () => "''",
    }),
    __metadata("design:type", String)
], SkillMotions.prototype, "motionName", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "skill_id" }),
    __metadata("design:type", Number)
], SkillMotions.prototype, "skillId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "attack_speed" }),
    __metadata("design:type", Number)
], SkillMotions.prototype, "attackSpeed", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { primary: true, name: "weapon_type", length: 255 }),
    __metadata("design:type", String)
], SkillMotions.prototype, "weaponType", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { primary: true, name: "off_weapon_type", length: 255 }),
    __metadata("design:type", String)
], SkillMotions.prototype, "offWeaponType", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "race", length: 255 }),
    __metadata("design:type", String)
], SkillMotions.prototype, "race", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { primary: true, name: "gender", length: 255 }),
    __metadata("design:type", String)
], SkillMotions.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "time", default: () => "'0'" }),
    __metadata("design:type", Number)
], SkillMotions.prototype, "time", void 0);
SkillMotions = __decorate([
    (0, typeorm_1.Entity)("skill_motions", { schema: "beritra" })
], SkillMotions);
exports.SkillMotions = SkillMotions;
//# sourceMappingURL=SkillMotions.js.map