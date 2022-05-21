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
exports.Bookmark = void 0;
const typeorm_1 = require("typeorm");
let Bookmark = class Bookmark {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "id" }),
    __metadata("design:type", Number)
], Bookmark.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "name", nullable: true, length: 50 }),
    __metadata("design:type", String)
], Bookmark.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "char_id" }),
    __metadata("design:type", Number)
], Bookmark.prototype, "charId", void 0);
__decorate([
    (0, typeorm_1.Column)("float", { name: "x", precision: 12 }),
    __metadata("design:type", Number)
], Bookmark.prototype, "x", void 0);
__decorate([
    (0, typeorm_1.Column)("float", { name: "y", precision: 12 }),
    __metadata("design:type", Number)
], Bookmark.prototype, "y", void 0);
__decorate([
    (0, typeorm_1.Column)("float", { name: "z", precision: 12 }),
    __metadata("design:type", Number)
], Bookmark.prototype, "z", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "world_id" }),
    __metadata("design:type", Number)
], Bookmark.prototype, "worldId", void 0);
Bookmark = __decorate([
    (0, typeorm_1.Entity)("bookmark", { schema: "beritra" })
], Bookmark);
exports.Bookmark = Bookmark;
//# sourceMappingURL=Bookmark.js.map