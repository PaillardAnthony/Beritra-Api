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
exports.PlayerTransfers = void 0;
const typeorm_1 = require("typeorm");
let PlayerTransfers = class PlayerTransfers {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "id" }),
    __metadata("design:type", Number)
], PlayerTransfers.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { name: "source_server" }),
    __metadata("design:type", Number)
], PlayerTransfers.prototype, "sourceServer", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { name: "target_server" }),
    __metadata("design:type", Number)
], PlayerTransfers.prototype, "targetServer", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "source_account_id" }),
    __metadata("design:type", Number)
], PlayerTransfers.prototype, "sourceAccountId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "target_account_id" }),
    __metadata("design:type", Number)
], PlayerTransfers.prototype, "targetAccountId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "player_id" }),
    __metadata("design:type", Number)
], PlayerTransfers.prototype, "playerId", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { name: "status", width: 1, default: () => "'0'" }),
    __metadata("design:type", Boolean)
], PlayerTransfers.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "time_added", nullable: true, length: 100 }),
    __metadata("design:type", String)
], PlayerTransfers.prototype, "timeAdded", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "time_performed", nullable: true, length: 100 }),
    __metadata("design:type", String)
], PlayerTransfers.prototype, "timePerformed", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "time_done", nullable: true, length: 100 }),
    __metadata("design:type", String)
], PlayerTransfers.prototype, "timeDone", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "comment", nullable: true }),
    __metadata("design:type", String)
], PlayerTransfers.prototype, "comment", void 0);
PlayerTransfers = __decorate([
    (0, typeorm_1.Entity)("player_transfers", { schema: "beritra" })
], PlayerTransfers);
exports.PlayerTransfers = PlayerTransfers;
//# sourceMappingURL=PlayerTransfers.js.map