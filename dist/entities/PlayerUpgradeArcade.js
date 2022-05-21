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
exports.PlayerUpgradeArcade = void 0;
const typeorm_1 = require("typeorm");
let PlayerUpgradeArcade = class PlayerUpgradeArcade {
};
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "player_id" }),
    __metadata("design:type", Number)
], PlayerUpgradeArcade.prototype, "playerId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "frenzy_meter" }),
    __metadata("design:type", Number)
], PlayerUpgradeArcade.prototype, "frenzyMeter", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "upgrade_lvl" }),
    __metadata("design:type", Number)
], PlayerUpgradeArcade.prototype, "upgradeLvl", void 0);
PlayerUpgradeArcade = __decorate([
    (0, typeorm_1.Entity)("player_upgrade_arcade", { schema: "beritra" })
], PlayerUpgradeArcade);
exports.PlayerUpgradeArcade = PlayerUpgradeArcade;
//# sourceMappingURL=PlayerUpgradeArcade.js.map