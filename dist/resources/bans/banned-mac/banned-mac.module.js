"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BannedMacModule = void 0;
const common_1 = require("@nestjs/common");
const banned_mac_service_1 = require("./banned-mac.service");
const banned_mac_controller_1 = require("./banned-mac.controller");
const typeorm_1 = require("@nestjs/typeorm");
const BannedMac_1 = require("../../../entities/BannedMac");
let BannedMacModule = class BannedMacModule {
};
BannedMacModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([BannedMac_1.BannedMac])],
        controllers: [banned_mac_controller_1.BannedMacController],
        providers: [banned_mac_service_1.BannedMacService]
    })
], BannedMacModule);
exports.BannedMacModule = BannedMacModule;
//# sourceMappingURL=banned-mac.module.js.map