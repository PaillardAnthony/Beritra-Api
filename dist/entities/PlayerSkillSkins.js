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
exports.PlayerSkillSkins = void 0;
const typeorm_1 = require("typeorm");
let PlayerSkillSkins = class PlayerSkillSkins {
};
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "player_id", default: () => "'0'" }),
    __metadata("design:type", Number)
], PlayerSkillSkins.prototype, "playerId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "skin_id", default: () => "'0'" }),
    __metadata("design:type", Number)
], PlayerSkillSkins.prototype, "skinId", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "remaining", nullable: true, default: () => "'0'" }),
    __metadata("design:type", String)
], PlayerSkillSkins.prototype, "remaining", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "active", nullable: true, default: () => "'0'" }),
    __metadata("design:type", Number)
], PlayerSkillSkins.prototype, "active", void 0);
PlayerSkillSkins = __decorate([
    (0, typeorm_1.Entity)("player_skill_skins", { schema: "beritra" })
], PlayerSkillSkins);
exports.PlayerSkillSkins = PlayerSkillSkins;
//# sourceMappingURL=PlayerSkillSkins.js.map