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
exports.PlayerPasskey = void 0;
const typeorm_1 = require("typeorm");
let PlayerPasskey = class PlayerPasskey {
};
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "account_id" }),
    __metadata("design:type", Number)
], PlayerPasskey.prototype, "accountId", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { primary: true, name: "passkey", length: 65 }),
    __metadata("design:type", String)
], PlayerPasskey.prototype, "passkey", void 0);
PlayerPasskey = __decorate([
    (0, typeorm_1.Entity)("player_passkey", { schema: "beritra" })
], PlayerPasskey);
exports.PlayerPasskey = PlayerPasskey;
//# sourceMappingURL=PlayerPasskey.js.map