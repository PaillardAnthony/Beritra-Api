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
exports.ChallengeTasks = void 0;
const typeorm_1 = require("typeorm");
let ChallengeTasks = class ChallengeTasks {
};
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "task_id" }),
    __metadata("design:type", Number)
], ChallengeTasks.prototype, "taskId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "quest_id" }),
    __metadata("design:type", Number)
], ChallengeTasks.prototype, "questId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "owner_id" }),
    __metadata("design:type", Number)
], ChallengeTasks.prototype, "ownerId", void 0);
__decorate([
    (0, typeorm_1.Column)("enum", {
        primary: true,
        name: "owner_type",
        enum: ["LEGION", "TOWN"],
    }),
    __metadata("design:type", String)
], ChallengeTasks.prototype, "ownerType", void 0);
__decorate([
    (0, typeorm_1.Column)("int", {
        name: "complete_count",
        unsigned: true,
        default: () => "'0'",
    }),
    __metadata("design:type", Number)
], ChallengeTasks.prototype, "completeCount", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", { name: "complete_time", nullable: true }),
    __metadata("design:type", Date)
], ChallengeTasks.prototype, "completeTime", void 0);
ChallengeTasks = __decorate([
    (0, typeorm_1.Entity)("challenge_tasks", { schema: "beritra" })
], ChallengeTasks);
exports.ChallengeTasks = ChallengeTasks;
//# sourceMappingURL=ChallengeTasks.js.map