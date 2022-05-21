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
exports.Items = void 0;
const typeorm_1 = require("typeorm");
const ShopCategory_1 = require("./ShopCategory");
let Items = class Items {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "id", unsigned: true }),
    __metadata("design:type", Number)
], Items.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "category_id", unsigned: true }),
    __metadata("design:type", Number)
], Items.prototype, "categoryId", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "item_code_id", length: 255 }),
    __metadata("design:type", String)
], Items.prototype, "itemCodeId", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "item_name", length: 255 }),
    __metadata("design:type", String)
], Items.prototype, "itemName", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "item_level", default: () => "'0'" }),
    __metadata("design:type", Number)
], Items.prototype, "itemLevel", void 0);
__decorate([
    (0, typeorm_1.Column)("enum", {
        name: "item_quality",
        enum: [
            "junk",
            "common",
            "rare",
            "legend",
            "unique",
            "epic",
            "relic",
            "ancient",
            "finality",
            "mythic",
        ],
    }),
    __metadata("design:type", String)
], Items.prototype, "itemQuality", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "item_icon", length: 255 }),
    __metadata("design:type", String)
], Items.prototype, "itemIcon", void 0);
__decorate([
    (0, typeorm_1.Column)("decimal", { name: "item_price", precision: 8, scale: 2 }),
    __metadata("design:type", String)
], Items.prototype, "itemPrice", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "item_quantity" }),
    __metadata("design:type", Number)
], Items.prototype, "itemQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "purchased" }),
    __metadata("design:type", Number)
], Items.prototype, "purchased", void 0);
__decorate([
    (0, typeorm_1.Column)("enum", { name: "item_type", enum: ["item", "pet", "gathersource"] }),
    __metadata("design:type", String)
], Items.prototype, "itemType", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", { name: "created_at", nullable: true }),
    __metadata("design:type", Date)
], Items.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], Items.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ShopCategory_1.ShopCategory, (shopCategory) => shopCategory.items, {
        onDelete: "CASCADE",
        onUpdate: "RESTRICT",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "category_id", referencedColumnName: "id" }]),
    __metadata("design:type", ShopCategory_1.ShopCategory)
], Items.prototype, "category", void 0);
Items = __decorate([
    (0, typeorm_1.Index)("items_category_id_foreign", ["categoryId"], {}),
    (0, typeorm_1.Entity)("items", { schema: "beritra" })
], Items);
exports.Items = Items;
//# sourceMappingURL=Items.js.map