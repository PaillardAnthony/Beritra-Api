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
exports.OutpostLocation = void 0;
const typeorm_1 = require("typeorm");
let OutpostLocation = class OutpostLocation {
};
__decorate([
    (0, typeorm_1.Column)("int", { name: "id" }),
    __metadata("design:type", Number)
], OutpostLocation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("enum", { name: "race", enum: ["ELYOS", "ASMODIANS", "NPC"] }),
    __metadata("design:type", String)
], OutpostLocation.prototype, "race", void 0);
OutpostLocation = __decorate([
    (0, typeorm_1.Entity)("outpost_location", { schema: "beritra" })
], OutpostLocation);
exports.OutpostLocation = OutpostLocation;
//# sourceMappingURL=OutpostLocation.js.map