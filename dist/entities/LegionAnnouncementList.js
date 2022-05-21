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
exports.LegionAnnouncementList = void 0;
const typeorm_1 = require("typeorm");
const Legions_1 = require("./Legions");
let LegionAnnouncementList = class LegionAnnouncementList {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], LegionAnnouncementList.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "legion_id" }),
    __metadata("design:type", Number)
], LegionAnnouncementList.prototype, "legionId", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "announcement", length: 256 }),
    __metadata("design:type", String)
], LegionAnnouncementList.prototype, "announcement", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", { name: "date", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], LegionAnnouncementList.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Legions_1.Legions, (legions) => legions.legionAnnouncementLists, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "legion_id", referencedColumnName: "id" }]),
    __metadata("design:type", Legions_1.Legions)
], LegionAnnouncementList.prototype, "legion", void 0);
LegionAnnouncementList = __decorate([
    (0, typeorm_1.Index)("legion_id", ["legionId"], {}),
    (0, typeorm_1.Entity)("legion_announcement_list", { schema: "beritra" })
], LegionAnnouncementList);
exports.LegionAnnouncementList = LegionAnnouncementList;
//# sourceMappingURL=LegionAnnouncementList.js.map