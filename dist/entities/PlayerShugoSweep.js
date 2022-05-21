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
exports.PlayerShugoSweep = void 0;
const typeorm_1 = require("typeorm");
let PlayerShugoSweep = class PlayerShugoSweep {
};
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "player_id" }),
    __metadata("design:type", Number)
], PlayerShugoSweep.prototype, "playerId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "free_dice", default: () => "'0'" }),
    __metadata("design:type", Number)
], PlayerShugoSweep.prototype, "freeDice", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "sweep_step", default: () => "'0'" }),
    __metadata("design:type", Number)
], PlayerShugoSweep.prototype, "sweepStep", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "board_id", default: () => "'0'" }),
    __metadata("design:type", Number)
], PlayerShugoSweep.prototype, "boardId", void 0);
PlayerShugoSweep = __decorate([
    (0, typeorm_1.Entity)("player_shugo_sweep", { schema: "beritra" })
], PlayerShugoSweep);
exports.PlayerShugoSweep = PlayerShugoSweep;
//# sourceMappingURL=PlayerShugoSweep.js.map