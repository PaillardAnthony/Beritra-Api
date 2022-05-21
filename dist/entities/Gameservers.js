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
exports.Gameservers = void 0;
const typeorm_1 = require("typeorm");
let Gameservers = class Gameservers {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "id" }),
    __metadata("design:type", Number)
], Gameservers.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "mask", length: 45 }),
    __metadata("design:type", String)
], Gameservers.prototype, "mask", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "password", length: 65 }),
    __metadata("design:type", String)
], Gameservers.prototype, "password", void 0);
Gameservers = __decorate([
    (0, typeorm_1.Entity)("gameservers", { schema: "beritra" })
], Gameservers);
exports.Gameservers = Gameservers;
//# sourceMappingURL=Gameservers.js.map