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
exports.BannedMac = void 0;
const typeorm_1 = require("typeorm");
let BannedMac = class BannedMac {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "uniId" }),
    __metadata("design:type", Number)
], BannedMac.prototype, "uniId", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "address", length: 20 }),
    __metadata("design:type", String)
], BannedMac.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", { name: "time", default: () => "'2010-01-01 14:00:00'" }),
    __metadata("design:type", Date)
], BannedMac.prototype, "time", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "details", length: 255, default: () => "''" }),
    __metadata("design:type", String)
], BannedMac.prototype, "details", void 0);
BannedMac = __decorate([
    (0, typeorm_1.Entity)("banned_mac", { schema: "beritra" })
], BannedMac);
exports.BannedMac = BannedMac;
//# sourceMappingURL=BannedMac.js.map