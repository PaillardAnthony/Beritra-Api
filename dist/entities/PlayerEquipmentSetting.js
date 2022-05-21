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
exports.PlayerEquipmentSetting = void 0;
const typeorm_1 = require("typeorm");
let PlayerEquipmentSetting = class PlayerEquipmentSetting {
};
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "player_id" }),
    __metadata("design:type", Number)
], PlayerEquipmentSetting.prototype, "playerId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "slot" }),
    __metadata("design:type", Number)
], PlayerEquipmentSetting.prototype, "slot", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { name: "display", default: () => "'0'" }),
    __metadata("design:type", Number)
], PlayerEquipmentSetting.prototype, "display", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "m_hand", default: () => "'0'" }),
    __metadata("design:type", Number)
], PlayerEquipmentSetting.prototype, "mHand", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "s_hand", default: () => "'0'" }),
    __metadata("design:type", Number)
], PlayerEquipmentSetting.prototype, "sHand", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "helmet", default: () => "'0'" }),
    __metadata("design:type", Number)
], PlayerEquipmentSetting.prototype, "helmet", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "torso", default: () => "'0'" }),
    __metadata("design:type", Number)
], PlayerEquipmentSetting.prototype, "torso", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "glove", default: () => "'0'" }),
    __metadata("design:type", Number)
], PlayerEquipmentSetting.prototype, "glove", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "boots", default: () => "'0'" }),
    __metadata("design:type", Number)
], PlayerEquipmentSetting.prototype, "boots", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "earrings_left", default: () => "'0'" }),
    __metadata("design:type", Number)
], PlayerEquipmentSetting.prototype, "earringsLeft", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "earrings_right", default: () => "'0'" }),
    __metadata("design:type", Number)
], PlayerEquipmentSetting.prototype, "earringsRight", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "ring_left", default: () => "'0'" }),
    __metadata("design:type", Number)
], PlayerEquipmentSetting.prototype, "ringLeft", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "ring_right", default: () => "'0'" }),
    __metadata("design:type", Number)
], PlayerEquipmentSetting.prototype, "ringRight", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "necklace", default: () => "'0'" }),
    __metadata("design:type", Number)
], PlayerEquipmentSetting.prototype, "necklace", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "shoulder", default: () => "'0'" }),
    __metadata("design:type", Number)
], PlayerEquipmentSetting.prototype, "shoulder", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "pants", default: () => "'0'" }),
    __metadata("design:type", Number)
], PlayerEquipmentSetting.prototype, "pants", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "powershard_left", default: () => "'0'" }),
    __metadata("design:type", Number)
], PlayerEquipmentSetting.prototype, "powershardLeft", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "powershard_right", default: () => "'0'" }),
    __metadata("design:type", Number)
], PlayerEquipmentSetting.prototype, "powershardRight", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "wings", default: () => "'0'" }),
    __metadata("design:type", Number)
], PlayerEquipmentSetting.prototype, "wings", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "waist", default: () => "'0'" }),
    __metadata("design:type", Number)
], PlayerEquipmentSetting.prototype, "waist", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "m_off_hand", default: () => "'0'" }),
    __metadata("design:type", Number)
], PlayerEquipmentSetting.prototype, "mOffHand", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "s_off_hand", default: () => "'0'" }),
    __metadata("design:type", Number)
], PlayerEquipmentSetting.prototype, "sOffHand", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "plume", default: () => "'0'" }),
    __metadata("design:type", Number)
], PlayerEquipmentSetting.prototype, "plume", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "bracelet", default: () => "'0'" }),
    __metadata("design:type", Number)
], PlayerEquipmentSetting.prototype, "bracelet", void 0);
PlayerEquipmentSetting = __decorate([
    (0, typeorm_1.Entity)("player_equipment_setting", { schema: "beritra" })
], PlayerEquipmentSetting);
exports.PlayerEquipmentSetting = PlayerEquipmentSetting;
//# sourceMappingURL=PlayerEquipmentSetting.js.map