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
exports.Tasks = void 0;
const typeorm_1 = require("typeorm");
let Tasks = class Tasks {
};
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "id" }),
    __metadata("design:type", Number)
], Tasks.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "task", length: 50 }),
    __metadata("design:type", String)
], Tasks.prototype, "task", void 0);
__decorate([
    (0, typeorm_1.Column)("enum", { name: "type", enum: ["FIXED_IN_TIME"] }),
    __metadata("design:type", String)
], Tasks.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", {
        name: "last_activation",
        default: () => "'2010-01-01 12:00:00'",
    }),
    __metadata("design:type", Date)
], Tasks.prototype, "lastActivation", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "start_time", length: 8 }),
    __metadata("design:type", String)
], Tasks.prototype, "startTime", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "delay" }),
    __metadata("design:type", Number)
], Tasks.prototype, "delay", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "param" }),
    __metadata("design:type", String)
], Tasks.prototype, "param", void 0);
Tasks = __decorate([
    (0, typeorm_1.Entity)("tasks", { schema: "beritra" })
], Tasks);
exports.Tasks = Tasks;
//# sourceMappingURL=Tasks.js.map