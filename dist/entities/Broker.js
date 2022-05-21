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
exports.Broker = void 0;
const typeorm_1 = require("typeorm");
const Players_1 = require("./Players");
let Broker = class Broker {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "id" }),
    __metadata("design:type", Number)
], Broker.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "item_pointer", default: () => "'0'" }),
    __metadata("design:type", Number)
], Broker.prototype, "itemPointer", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "item_id" }),
    __metadata("design:type", Number)
], Broker.prototype, "itemId", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "item_count" }),
    __metadata("design:type", String)
], Broker.prototype, "itemCount", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "item_creator", nullable: true, length: 50 }),
    __metadata("design:type", String)
], Broker.prototype, "itemCreator", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "seller", nullable: true, length: 50 }),
    __metadata("design:type", String)
], Broker.prototype, "seller", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "price", default: () => "'0'" }),
    __metadata("design:type", String)
], Broker.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)("enum", { name: "broker_race", enum: ["ELYOS", "ASMODIAN"] }),
    __metadata("design:type", String)
], Broker.prototype, "brokerRace", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", {
        name: "expire_time",
        default: () => "'2010-01-01 14:00:00'",
    }),
    __metadata("design:type", Date)
], Broker.prototype, "expireTime", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", {
        name: "settle_time",
        default: () => "'2010-01-01 14:00:00'",
    }),
    __metadata("design:type", Date)
], Broker.prototype, "settleTime", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "seller_id" }),
    __metadata("design:type", Number)
], Broker.prototype, "sellerId", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { name: "is_sold", width: 1 }),
    __metadata("design:type", Boolean)
], Broker.prototype, "isSold", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { name: "is_settled", width: 1 }),
    __metadata("design:type", Boolean)
], Broker.prototype, "isSettled", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { name: "is_splitsell", width: 1 }),
    __metadata("design:type", Boolean)
], Broker.prototype, "isSplitsell", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Players_1.Players, (players) => players.brokers, {
        onDelete: "CASCADE",
        onUpdate: "RESTRICT",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "seller_id", referencedColumnName: "id" }]),
    __metadata("design:type", Players_1.Players)
], Broker.prototype, "seller_2", void 0);
Broker = __decorate([
    (0, typeorm_1.Index)("seller_id", ["sellerId"], {}),
    (0, typeorm_1.Entity)("broker", { schema: "beritra" })
], Broker);
exports.Broker = Broker;
//# sourceMappingURL=Broker.js.map