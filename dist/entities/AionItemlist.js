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
exports.AionItemlist = void 0;
const typeorm_1 = require("typeorm");
let AionItemlist = class AionItemlist {
};
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "item_id", unsigned: true }),
    __metadata("design:type", Number)
], AionItemlist.prototype, "itemId", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "item_name", nullable: true, length: 100 }),
    __metadata("design:type", String)
], AionItemlist.prototype, "itemName", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "item_quality", nullable: true, length: 25 }),
    __metadata("design:type", String)
], AionItemlist.prototype, "itemQuality", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "item_icon", nullable: true, length: 50 }),
    __metadata("design:type", String)
], AionItemlist.prototype, "itemIcon", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "updated", default: () => "'0'" }),
    __metadata("design:type", Number)
], AionItemlist.prototype, "updated", void 0);
AionItemlist = __decorate([
    (0, typeorm_1.Entity)("aion_itemlist", { schema: "beritra" })
], AionItemlist);
exports.AionItemlist = AionItemlist;
//# sourceMappingURL=AionItemlist.js.map