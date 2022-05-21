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
exports.Announcements = void 0;
const typeorm_1 = require("typeorm");
let Announcements = class Announcements {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "id" }),
    __metadata("design:type", Number)
], Announcements.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "announce" }),
    __metadata("design:type", String)
], Announcements.prototype, "announce", void 0);
__decorate([
    (0, typeorm_1.Column)("enum", {
        name: "faction",
        enum: ["ALL", "ASMODIANS", "ELYOS"],
        default: () => "'ALL'",
    }),
    __metadata("design:type", String)
], Announcements.prototype, "faction", void 0);
__decorate([
    (0, typeorm_1.Column)("enum", {
        name: "type",
        enum: ["SHOUT", "ORANGE", "YELLOW", "WHITE", "SYSTEM"],
        default: () => "'SYSTEM'",
    }),
    __metadata("design:type", String)
], Announcements.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "delay", default: () => "'1800'" }),
    __metadata("design:type", Number)
], Announcements.prototype, "delay", void 0);
Announcements = __decorate([
    (0, typeorm_1.Entity)("announcements", { schema: "beritra" })
], Announcements);
exports.Announcements = Announcements;
//# sourceMappingURL=Announcements.js.map