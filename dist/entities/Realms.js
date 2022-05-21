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
exports.Realms = void 0;
const typeorm_1 = require("typeorm");
let Realms = class Realms {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "id", unsigned: true }),
    __metadata("design:type", Number)
], Realms.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "name", nullable: true, length: 32 }),
    __metadata("design:type", String)
], Realms.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "sqlhost", nullable: true, length: 32 }),
    __metadata("design:type", String)
], Realms.prototype, "sqlhost", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "sqluser", nullable: true, length: 32 }),
    __metadata("design:type", String)
], Realms.prototype, "sqluser", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "sqlpass", nullable: true, length: 32 }),
    __metadata("design:type", String)
], Realms.prototype, "sqlpass", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "chardb", nullable: true, length: 32 }),
    __metadata("design:type", String)
], Realms.prototype, "chardb", void 0);
Realms = __decorate([
    (0, typeorm_1.Entity)("realms", { schema: "beritra" })
], Realms);
exports.Realms = Realms;
//# sourceMappingURL=Realms.js.map