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
exports.Towns = void 0;
const typeorm_1 = require("typeorm");
let Towns = class Towns {
};
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "id" }),
    __metadata("design:type", Number)
], Towns.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "level", default: () => "'1'" }),
    __metadata("design:type", Number)
], Towns.prototype, "level", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "points", default: () => "'0'" }),
    __metadata("design:type", Number)
], Towns.prototype, "points", void 0);
__decorate([
    (0, typeorm_1.Column)("enum", { name: "race", enum: ["ELYOS", "ASMODIANS"] }),
    __metadata("design:type", String)
], Towns.prototype, "race", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", {
        name: "level_up_date",
        default: () => "'2013-01-01 14:00:00'",
    }),
    __metadata("design:type", Date)
], Towns.prototype, "levelUpDate", void 0);
Towns = __decorate([
    (0, typeorm_1.Entity)("towns", { schema: "beritra" })
], Towns);
exports.Towns = Towns;
//# sourceMappingURL=Towns.js.map