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
exports.Inventory = void 0;
const typeorm_1 = require("typeorm");
const ItemStones_1 = require("./ItemStones");
let Inventory = class Inventory {
};
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "item_unique_id" }),
    __metadata("design:type", Number)
], Inventory.prototype, "itemUniqueId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "item_id" }),
    __metadata("design:type", Number)
], Inventory.prototype, "itemId", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "item_count", default: () => "'0'" }),
    __metadata("design:type", String)
], Inventory.prototype, "itemCount", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "item_color", default: () => "'0'" }),
    __metadata("design:type", Number)
], Inventory.prototype, "itemColor", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "color_expires", nullable: true }),
    __metadata("design:type", Number)
], Inventory.prototype, "colorExpires", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "item_owner" }),
    __metadata("design:type", Number)
], Inventory.prototype, "itemOwner", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "item_creator", nullable: true, length: 50 }),
    __metadata("design:type", String)
], Inventory.prototype, "itemCreator", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", {
        name: "itemCreationTime",
        default: () => "'2013-01-01 11:00:01'",
    }),
    __metadata("design:type", Date)
], Inventory.prototype, "itemCreationTime", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "expire_time", default: () => "'0'" }),
    __metadata("design:type", Number)
], Inventory.prototype, "expireTime", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { name: "is_equiped", width: 1, default: () => "'0'" }),
    __metadata("design:type", Boolean)
], Inventory.prototype, "isEquiped", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { name: "is_soul_bound", width: 1, default: () => "'0'" }),
    __metadata("design:type", Boolean)
], Inventory.prototype, "isSoulBound", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "slot", default: () => "'0'" }),
    __metadata("design:type", String)
], Inventory.prototype, "slot", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", {
        name: "item_location",
        nullable: true,
        width: 1,
        default: () => "'0'",
    }),
    __metadata("design:type", Boolean)
], Inventory.prototype, "itemLocation", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", {
        name: "enchant",
        nullable: true,
        width: 1,
        default: () => "'0'",
    }),
    __metadata("design:type", Boolean)
], Inventory.prototype, "enchant", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "enchant_bonus", default: () => "'0'" }),
    __metadata("design:type", Number)
], Inventory.prototype, "enchantBonus", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "item_skin", default: () => "'0'" }),
    __metadata("design:type", Number)
], Inventory.prototype, "itemSkin", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "fusioned_item", default: () => "'0'" }),
    __metadata("design:type", Number)
], Inventory.prototype, "fusionedItem", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "optional_socket", default: () => "'0'" }),
    __metadata("design:type", Number)
], Inventory.prototype, "optionalSocket", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "optional_fusion_socket", default: () => "'0'" }),
    __metadata("design:type", Number)
], Inventory.prototype, "optionalFusionSocket", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "activation_count", default: () => "'0'" }),
    __metadata("design:type", Number)
], Inventory.prototype, "activationCount", void 0);
__decorate([
    (0, typeorm_1.Column)("mediumint", { name: "charge", default: () => "'0'" }),
    __metadata("design:type", Number)
], Inventory.prototype, "charge", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "rnd_bonus", nullable: true }),
    __metadata("design:type", Number)
], Inventory.prototype, "rndBonus", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "rnd_count", default: () => "'0'" }),
    __metadata("design:type", Number)
], Inventory.prototype, "rndCount", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "wrappable_count", default: () => "'0'" }),
    __metadata("design:type", Number)
], Inventory.prototype, "wrappableCount", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { name: "is_packed", width: 1, default: () => "'0'" }),
    __metadata("design:type", Boolean)
], Inventory.prototype, "isPacked", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "tempering_level", default: () => "'0'" }),
    __metadata("design:type", Number)
], Inventory.prototype, "temperingLevel", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { name: "is_topped", width: 1, default: () => "'0'" }),
    __metadata("design:type", Boolean)
], Inventory.prototype, "isTopped", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "strengthen_skill", default: () => "'0'" }),
    __metadata("design:type", Number)
], Inventory.prototype, "strengthenSkill", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "skin_skill", nullable: true, default: () => "'0'" }),
    __metadata("design:type", Number)
], Inventory.prototype, "skinSkill", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { name: "luna_reskin", width: 1, default: () => "'0'" }),
    __metadata("design:type", Boolean)
], Inventory.prototype, "lunaReskin", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "reduction_level", default: () => "'0'" }),
    __metadata("design:type", Number)
], Inventory.prototype, "reductionLevel", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "is_seal", default: () => "'0'" }),
    __metadata("design:type", Number)
], Inventory.prototype, "isSeal", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", {
        name: "isEnhance",
        nullable: true,
        width: 1,
        default: () => "'0'",
    }),
    __metadata("design:type", Boolean)
], Inventory.prototype, "isEnhance", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "enhanceSkillId", default: () => "'0'" }),
    __metadata("design:type", Number)
], Inventory.prototype, "enhanceSkillId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "enhanceSkillEnchant", default: () => "'0'" }),
    __metadata("design:type", Number)
], Inventory.prototype, "enhanceSkillEnchant", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ItemStones_1.ItemStones, (itemStones) => itemStones.itemUnique),
    __metadata("design:type", Array)
], Inventory.prototype, "itemStones", void 0);
Inventory = __decorate([
    (0, typeorm_1.Index)("item_owner", ["itemOwner"], {}),
    (0, typeorm_1.Index)("item_location", ["itemLocation"], {}),
    (0, typeorm_1.Index)("is_equiped", ["isEquiped"], {}),
    (0, typeorm_1.Entity)("inventory", { schema: "beritra" })
], Inventory);
exports.Inventory = Inventory;
//# sourceMappingURL=Inventory.js.map