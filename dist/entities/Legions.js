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
exports.Legions = void 0;
const typeorm_1 = require("typeorm");
const LegionEmblems_1 = require("./LegionEmblems");
const LegionHistory_1 = require("./LegionHistory");
const LegionAnnouncementList_1 = require("./LegionAnnouncementList");
const LegionMembers_1 = require("./LegionMembers");
let Legions = class Legions {
};
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "id" }),
    __metadata("design:type", Number)
], Legions.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "name", unique: true, length: 32 }),
    __metadata("design:type", String)
], Legions.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "level", default: () => "'1'" }),
    __metadata("design:type", Number)
], Legions.prototype, "level", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "contribution_points", default: () => "'0'" }),
    __metadata("design:type", String)
], Legions.prototype, "contributionPoints", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "deputy_permission", default: () => "'7692'" }),
    __metadata("design:type", Number)
], Legions.prototype, "deputyPermission", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "centurion_permission", default: () => "'7176'" }),
    __metadata("design:type", Number)
], Legions.prototype, "centurionPermission", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "legionary_permission", default: () => "'6144'" }),
    __metadata("design:type", Number)
], Legions.prototype, "legionaryPermission", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "volunteer_permission", default: () => "'2048'" }),
    __metadata("design:type", Number)
], Legions.prototype, "volunteerPermission", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "disband_time", default: () => "'0'" }),
    __metadata("design:type", Number)
], Legions.prototype, "disbandTime", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "rank_cp", default: () => "'0'" }),
    __metadata("design:type", Number)
], Legions.prototype, "rankCp", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "rank_pos", default: () => "'0'" }),
    __metadata("design:type", Number)
], Legions.prototype, "rankPos", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "old_rank_pos", default: () => "'0'" }),
    __metadata("design:type", Number)
], Legions.prototype, "oldRankPos", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "description", length: 255, default: () => "''" }),
    __metadata("design:type", String)
], Legions.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "joinType", default: () => "'0'" }),
    __metadata("design:type", Number)
], Legions.prototype, "joinType", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "minJoinLevel", default: () => "'0'" }),
    __metadata("design:type", Number)
], Legions.prototype, "minJoinLevel", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "territory", default: () => "'0'" }),
    __metadata("design:type", Number)
], Legions.prototype, "territory", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => LegionEmblems_1.LegionEmblems, (legionEmblems) => legionEmblems.legion),
    __metadata("design:type", LegionEmblems_1.LegionEmblems)
], Legions.prototype, "legionEmblems", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => LegionHistory_1.LegionHistory, (legionHistory) => legionHistory.legion),
    __metadata("design:type", Array)
], Legions.prototype, "legionHistories", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => LegionAnnouncementList_1.LegionAnnouncementList, (legionAnnouncementList) => legionAnnouncementList.legion),
    __metadata("design:type", Array)
], Legions.prototype, "legionAnnouncementLists", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => LegionMembers_1.LegionMembers, (legionMembers) => legionMembers.legion),
    __metadata("design:type", Array)
], Legions.prototype, "legionMembers", void 0);
Legions = __decorate([
    (0, typeorm_1.Index)("name_unique", ["name"], { unique: true }),
    (0, typeorm_1.Entity)("legions", { schema: "beritra" })
], Legions);
exports.Legions = Legions;
//# sourceMappingURL=Legions.js.map