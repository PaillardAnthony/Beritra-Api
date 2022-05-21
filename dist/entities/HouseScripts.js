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
exports.HouseScripts = void 0;
const typeorm_1 = require("typeorm");
const Houses_1 = require("./Houses");
let HouseScripts = class HouseScripts {
};
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "house_id" }),
    __metadata("design:type", Number)
], HouseScripts.prototype, "houseId", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { primary: true, name: "index" }),
    __metadata("design:type", Number)
], HouseScripts.prototype, "index", void 0);
__decorate([
    (0, typeorm_1.Column)("mediumtext", { name: "script", nullable: true }),
    __metadata("design:type", String)
], HouseScripts.prototype, "script", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Houses_1.Houses, (houses) => houses.houseScripts, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "house_id", referencedColumnName: "id" }]),
    __metadata("design:type", Houses_1.Houses)
], HouseScripts.prototype, "house", void 0);
HouseScripts = __decorate([
    (0, typeorm_1.Entity)("house_scripts", { schema: "beritra" })
], HouseScripts);
exports.HouseScripts = HouseScripts;
//# sourceMappingURL=HouseScripts.js.map