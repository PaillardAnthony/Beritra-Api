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
exports.ItemStones = void 0;
const typeorm_1 = require("typeorm");
const Inventory_1 = require("./Inventory");
let ItemStones = class ItemStones {
};
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "item_unique_id" }),
    __metadata("design:type", Number)
], ItemStones.prototype, "itemUniqueId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "item_id" }),
    __metadata("design:type", Number)
], ItemStones.prototype, "itemId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "slot" }),
    __metadata("design:type", Number)
], ItemStones.prototype, "slot", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "category", default: () => "'0'" }),
    __metadata("design:type", Number)
], ItemStones.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "polishNumber", nullable: true, default: () => "'0'" }),
    __metadata("design:type", Number)
], ItemStones.prototype, "polishNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "polishCharge", nullable: true, default: () => "'0'" }),
    __metadata("design:type", Number)
], ItemStones.prototype, "polishCharge", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", { name: "break", nullable: true }),
    __metadata("design:type", Date)
], ItemStones.prototype, "break", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Inventory_1.Inventory, (inventory) => inventory.itemStones, {
        onDelete: "CASCADE",
        onUpdate: "RESTRICT",
    }),
    (0, typeorm_1.JoinColumn)([
        { name: "item_unique_id", referencedColumnName: "itemUniqueId" },
    ]),
    __metadata("design:type", Inventory_1.Inventory)
], ItemStones.prototype, "itemUnique", void 0);
ItemStones = __decorate([
    (0, typeorm_1.Entity)("item_stones", { schema: "beritra" })
], ItemStones);
exports.ItemStones = ItemStones;
//# sourceMappingURL=ItemStones.js.map