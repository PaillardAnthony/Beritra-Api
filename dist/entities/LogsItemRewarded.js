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
exports.LogsItemRewarded = void 0;
const typeorm_1 = require("typeorm");
let LogsItemRewarded = class LogsItemRewarded {
};
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "item_id_rewarded", length: 255 }),
    __metadata("design:type", String)
], LogsItemRewarded.prototype, "itemIdRewarded", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "player_name", length: 255 }),
    __metadata("design:type", String)
], LogsItemRewarded.prototype, "playerName", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "player_id" }),
    __metadata("design:type", Number)
], LogsItemRewarded.prototype, "playerId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "rewarded_status", default: () => "'0'" }),
    __metadata("design:type", Number)
], LogsItemRewarded.prototype, "rewardedStatus", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", { name: "created_at", nullable: true }),
    __metadata("design:type", Date)
], LogsItemRewarded.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], LogsItemRewarded.prototype, "updatedAt", void 0);
LogsItemRewarded = __decorate([
    (0, typeorm_1.Entity)("logs_item_rewarded", { schema: "beritra" })
], LogsItemRewarded);
exports.LogsItemRewarded = LogsItemRewarded;
//# sourceMappingURL=LogsItemRewarded.js.map