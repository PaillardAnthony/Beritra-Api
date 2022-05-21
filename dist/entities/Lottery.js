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
exports.Lottery = void 0;
const typeorm_1 = require("typeorm");
let Lottery = class Lottery {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "id" }),
    __metadata("design:type", Number)
], Lottery.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "name", length: 25 }),
    __metadata("design:type", String)
], Lottery.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "current_jackpot", unsigned: true }),
    __metadata("design:type", Number)
], Lottery.prototype, "currentJackpot", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", {
        name: "current_stage",
        unsigned: true,
        default: () => "'0'",
    }),
    __metadata("design:type", Number)
], Lottery.prototype, "currentStage", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "start_timestamp", length: 25 }),
    __metadata("design:type", String)
], Lottery.prototype, "startTimestamp", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "end_timestamp", length: 25 }),
    __metadata("design:type", String)
], Lottery.prototype, "endTimestamp", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { name: "number1", unsigned: true }),
    __metadata("design:type", Number)
], Lottery.prototype, "number1", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { name: "number2", unsigned: true }),
    __metadata("design:type", Number)
], Lottery.prototype, "number2", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { name: "number3", unsigned: true }),
    __metadata("design:type", Number)
], Lottery.prototype, "number3", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { name: "number4", unsigned: true }),
    __metadata("design:type", Number)
], Lottery.prototype, "number4", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "winners_1", nullable: true, unsigned: true }),
    __metadata("design:type", Number)
], Lottery.prototype, "winners_1", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "winners_2", nullable: true, unsigned: true }),
    __metadata("design:type", Number)
], Lottery.prototype, "winners_2", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "winners_3", nullable: true, unsigned: true }),
    __metadata("design:type", Number)
], Lottery.prototype, "winners_3", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "winners_4", nullable: true, unsigned: true }),
    __metadata("design:type", Number)
], Lottery.prototype, "winners_4", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", {
        name: "finished",
        nullable: true,
        unsigned: true,
        default: () => "'0'",
    }),
    __metadata("design:type", Number)
], Lottery.prototype, "finished", void 0);
Lottery = __decorate([
    (0, typeorm_1.Entity)("lottery", { schema: "beritra" })
], Lottery);
exports.Lottery = Lottery;
//# sourceMappingURL=Lottery.js.map