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
exports.Petitions = void 0;
const typeorm_1 = require("typeorm");
let Petitions = class Petitions {
};
__decorate([
    (0, typeorm_1.Column)("bigint", { primary: true, name: "id" }),
    __metadata("design:type", String)
], Petitions.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "player_id" }),
    __metadata("design:type", Number)
], Petitions.prototype, "playerId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "type" }),
    __metadata("design:type", Number)
], Petitions.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "title", length: 255 }),
    __metadata("design:type", String)
], Petitions.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "message" }),
    __metadata("design:type", String)
], Petitions.prototype, "message", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "add_data", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Petitions.prototype, "addData", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "time", default: () => "'0'" }),
    __metadata("design:type", String)
], Petitions.prototype, "time", void 0);
__decorate([
    (0, typeorm_1.Column)("enum", {
        name: "status",
        enum: ["PENDING", "IN_PROGRESS", "REPLIED"],
    }),
    __metadata("design:type", String)
], Petitions.prototype, "status", void 0);
Petitions = __decorate([
    (0, typeorm_1.Entity)("petitions", { schema: "beritra" })
], Petitions);
exports.Petitions = Petitions;
//# sourceMappingURL=Petitions.js.map