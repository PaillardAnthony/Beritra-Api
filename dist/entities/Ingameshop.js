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
exports.Ingameshop = void 0;
const typeorm_1 = require("typeorm");
let Ingameshop = class Ingameshop {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "object_id" }),
    __metadata("design:type", Number)
], Ingameshop.prototype, "objectId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "item_id" }),
    __metadata("design:type", Number)
], Ingameshop.prototype, "itemId", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "item_count", default: () => "'0'" }),
    __metadata("design:type", String)
], Ingameshop.prototype, "itemCount", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "item_price", default: () => "'0'" }),
    __metadata("design:type", String)
], Ingameshop.prototype, "itemPrice", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { name: "category", width: 1, default: () => "'0'" }),
    __metadata("design:type", Boolean)
], Ingameshop.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { name: "sub_category", width: 1, default: () => "'0'" }),
    __metadata("design:type", Boolean)
], Ingameshop.prototype, "subCategory", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "list", default: () => "'0'" }),
    __metadata("design:type", Number)
], Ingameshop.prototype, "list", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "sales_ranking", default: () => "'0'" }),
    __metadata("design:type", Number)
], Ingameshop.prototype, "salesRanking", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { name: "item_type", width: 1, default: () => "'0'" }),
    __metadata("design:type", Boolean)
], Ingameshop.prototype, "itemType", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { name: "gift", width: 1, default: () => "'0'" }),
    __metadata("design:type", Boolean)
], Ingameshop.prototype, "gift", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "title_description", length: 255 }),
    __metadata("design:type", String)
], Ingameshop.prototype, "titleDescription", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "description", length: 255 }),
    __metadata("design:type", String)
], Ingameshop.prototype, "description", void 0);
Ingameshop = __decorate([
    (0, typeorm_1.Entity)("ingameshop", { schema: "beritra" })
], Ingameshop);
exports.Ingameshop = Ingameshop;
//# sourceMappingURL=Ingameshop.js.map