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
exports.Pages = void 0;
const typeorm_1 = require("typeorm");
let Pages = class Pages {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "id", unsigned: true }),
    __metadata("design:type", Number)
], Pages.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "page_name", length: 255 }),
    __metadata("design:type", String)
], Pages.prototype, "pageName", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "text_content" }),
    __metadata("design:type", String)
], Pages.prototype, "textContent", void 0);
Pages = __decorate([
    (0, typeorm_1.Entity)("pages", { schema: "beritra" })
], Pages);
exports.Pages = Pages;
//# sourceMappingURL=Pages.js.map