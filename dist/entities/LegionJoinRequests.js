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
exports.LegionJoinRequests = void 0;
const typeorm_1 = require("typeorm");
let LegionJoinRequests = class LegionJoinRequests {
};
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "legionId", default: () => "'0'" }),
    __metadata("design:type", Number)
], LegionJoinRequests.prototype, "legionId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "playerId", default: () => "'0'" }),
    __metadata("design:type", Number)
], LegionJoinRequests.prototype, "playerId", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "playerName", length: 64, default: () => "''" }),
    __metadata("design:type", String)
], LegionJoinRequests.prototype, "playerName", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "playerClassId", default: () => "'0'" }),
    __metadata("design:type", Number)
], LegionJoinRequests.prototype, "playerClassId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "playerRaceId", default: () => "'0'" }),
    __metadata("design:type", Number)
], LegionJoinRequests.prototype, "playerRaceId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "playerLevel", default: () => "'0'" }),
    __metadata("design:type", Number)
], LegionJoinRequests.prototype, "playerLevel", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "playerGenderId", default: () => "'0'" }),
    __metadata("design:type", Number)
], LegionJoinRequests.prototype, "playerGenderId", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "joinRequestMsg",
        length: 40,
        default: () => "''",
    }),
    __metadata("design:type", String)
], LegionJoinRequests.prototype, "joinRequestMsg", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", { name: "date", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], LegionJoinRequests.prototype, "date", void 0);
LegionJoinRequests = __decorate([
    (0, typeorm_1.Entity)("legion_join_requests", { schema: "beritra" })
], LegionJoinRequests);
exports.LegionJoinRequests = LegionJoinRequests;
//# sourceMappingURL=LegionJoinRequests.js.map