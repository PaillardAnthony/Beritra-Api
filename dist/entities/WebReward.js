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
exports.WebReward = void 0;
const typeorm_1 = require("typeorm");
const Players_1 = require("./Players");
let WebReward = class WebReward {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "unique" }),
    __metadata("design:type", Number)
], WebReward.prototype, "unique", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "item_owner" }),
    __metadata("design:type", Number)
], WebReward.prototype, "itemOwner", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "item_id" }),
    __metadata("design:type", Number)
], WebReward.prototype, "itemId", void 0);
__decorate([
    (0, typeorm_1.Column)("decimal", {
        name: "item_count",
        precision: 20,
        scale: 0,
        default: () => "'1'",
    }),
    __metadata("design:type", String)
], WebReward.prototype, "itemCount", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { name: "rewarded", width: 1, default: () => "'0'" }),
    __metadata("design:type", Boolean)
], WebReward.prototype, "rewarded", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "added",
        nullable: true,
        length: 70,
        default: () => "''",
    }),
    __metadata("design:type", String)
], WebReward.prototype, "added", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "received",
        nullable: true,
        length: 70,
        default: () => "''",
    }),
    __metadata("design:type", String)
], WebReward.prototype, "received", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Players_1.Players, (players) => players.webRewards, {
        onDelete: "CASCADE",
        onUpdate: "RESTRICT",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "item_owner", referencedColumnName: "id" }]),
    __metadata("design:type", Players_1.Players)
], WebReward.prototype, "itemOwner2", void 0);
WebReward = __decorate([
    (0, typeorm_1.Index)("item_owner", ["itemOwner"], {}),
    (0, typeorm_1.Entity)("web_reward", { schema: "beritra" })
], WebReward);
exports.WebReward = WebReward;
//# sourceMappingURL=WebReward.js.map