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
exports.News = void 0;
const typeorm_1 = require("typeorm");
let News = class News {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "id", unsigned: true }),
    __metadata("design:type", Number)
], News.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "account_id" }),
    __metadata("design:type", Number)
], News.prototype, "accountId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "category_id" }),
    __metadata("design:type", Number)
], News.prototype, "categoryId", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "title", length: 255 }),
    __metadata("design:type", String)
], News.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)("longtext", { name: "content" }),
    __metadata("design:type", String)
], News.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "slug", unique: true, length: 255 }),
    __metadata("design:type", String)
], News.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "image", nullable: true, length: 255 }),
    __metadata("design:type", String)
], News.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", { name: "created_at", nullable: true }),
    __metadata("design:type", Date)
], News.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], News.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("enum", { name: "news_position", enum: ["big_left", "small_right"] }),
    __metadata("design:type", String)
], News.prototype, "newsPosition", void 0);
News = __decorate([
    (0, typeorm_1.Index)("news_slug_unique", ["slug"], { unique: true }),
    (0, typeorm_1.Entity)("news", { schema: "beritra" })
], News);
exports.News = News;
//# sourceMappingURL=News.js.map