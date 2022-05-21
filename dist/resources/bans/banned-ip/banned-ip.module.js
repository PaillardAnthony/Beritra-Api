"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BannedIpModule = void 0;
const common_1 = require("@nestjs/common");
const banned_ip_service_1 = require("./banned-ip.service");
const banned_ip_controller_1 = require("./banned-ip.controller");
const typeorm_1 = require("@nestjs/typeorm");
const BannedIp_1 = require("../../../entities/BannedIp");
let BannedIpModule = class BannedIpModule {
};
BannedIpModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([BannedIp_1.BannedIp])],
        controllers: [banned_ip_controller_1.BannedIpController],
        providers: [banned_ip_service_1.BannedIpService]
    })
], BannedIpModule);
exports.BannedIpModule = BannedIpModule;
//# sourceMappingURL=banned-ip.module.js.map