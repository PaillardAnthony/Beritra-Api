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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BannedIpController = void 0;
const common_1 = require("@nestjs/common");
const banned_ip_service_1 = require("./banned-ip.service");
const create_banned_ip_dto_1 = require("./dto/create-banned-ip.dto");
const update_banned_ip_dto_1 = require("./dto/update-banned-ip.dto");
let BannedIpController = class BannedIpController {
    constructor(bannedIpService) {
        this.bannedIpService = bannedIpService;
    }
    create(createBannedIpDto) {
        return this.bannedIpService.create(createBannedIpDto);
    }
    findAll() {
        return this.bannedIpService.findAll();
    }
    findOne(id) {
        return this.bannedIpService.findOne(+id);
    }
    update(id, updateBannedIpDto) {
        return this.bannedIpService.update(+id, updateBannedIpDto);
    }
    remove(id) {
        return this.bannedIpService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_banned_ip_dto_1.CreateBannedIpDto]),
    __metadata("design:returntype", void 0)
], BannedIpController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BannedIpController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BannedIpController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_banned_ip_dto_1.UpdateBannedIpDto]),
    __metadata("design:returntype", void 0)
], BannedIpController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BannedIpController.prototype, "remove", null);
BannedIpController = __decorate([
    (0, common_1.Controller)('banned-ip'),
    __metadata("design:paramtypes", [banned_ip_service_1.BannedIpService])
], BannedIpController);
exports.BannedIpController = BannedIpController;
//# sourceMappingURL=banned-ip.controller.js.map