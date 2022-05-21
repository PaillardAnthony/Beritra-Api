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
exports.HouseObjectCooldowns = void 0;
const typeorm_1 = require("typeorm");
let HouseObjectCooldowns = class HouseObjectCooldowns {
};
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "player_id" }),
    __metadata("design:type", Number)
], HouseObjectCooldowns.prototype, "playerId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "object_id" }),
    __metadata("design:type", Number)
], HouseObjectCooldowns.prototype, "objectId", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "reuse_time" }),
    __metadata("design:type", String)
], HouseObjectCooldowns.prototype, "reuseTime", void 0);
HouseObjectCooldowns = __decorate([
    (0, typeorm_1.Entity)("house_object_cooldowns", { schema: "beritra" })
], HouseObjectCooldowns);
exports.HouseObjectCooldowns = HouseObjectCooldowns;
//# sourceMappingURL=HouseObjectCooldowns.js.map