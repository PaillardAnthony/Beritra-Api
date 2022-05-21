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
exports.BannedIp = void 0;
const typeorm_1 = require("typeorm");
let BannedIp = class BannedIp {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "id" }),
    __metadata("design:type", Number)
], BannedIp.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "mask", unique: true, length: 45 }),
    __metadata("design:type", String)
], BannedIp.prototype, "mask", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", { name: "time_end", nullable: true }),
    __metadata("design:type", Date)
], BannedIp.prototype, "timeEnd", void 0);
BannedIp = __decorate([
    (0, typeorm_1.Index)("mask", ["mask"], { unique: true }),
    (0, typeorm_1.Entity)("banned_ip", { schema: "beritra" })
], BannedIp);
exports.BannedIp = BannedIp;
//# sourceMappingURL=BannedIp.js.map