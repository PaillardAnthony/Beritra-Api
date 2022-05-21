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
exports.BannedMacController = void 0;
const common_1 = require("@nestjs/common");
const banned_mac_service_1 = require("./banned-mac.service");
const create_banned_mac_dto_1 = require("./dto/create-banned-mac.dto");
const update_banned_mac_dto_1 = require("./dto/update-banned-mac.dto");
let BannedMacController = class BannedMacController {
    constructor(bannedMacService) {
        this.bannedMacService = bannedMacService;
    }
    create(createBannedMacDto) {
        return this.bannedMacService.create(createBannedMacDto);
    }
    findAll() {
        return this.bannedMacService.findAll();
    }
    findOne(id) {
        return this.bannedMacService.findOne(+id);
    }
    update(id, updateBannedMacDto) {
        return this.bannedMacService.update(+id, updateBannedMacDto);
    }
    remove(id) {
        return this.bannedMacService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_banned_mac_dto_1.CreateBannedMacDto]),
    __metadata("design:returntype", void 0)
], BannedMacController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BannedMacController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BannedMacController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_banned_mac_dto_1.UpdateBannedMacDto]),
    __metadata("design:returntype", void 0)
], BannedMacController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BannedMacController.prototype, "remove", null);
BannedMacController = __decorate([
    (0, common_1.Controller)('banned-mac'),
    __metadata("design:paramtypes", [banned_mac_service_1.BannedMacService])
], BannedMacController);
exports.BannedMacController = BannedMacController;
//# sourceMappingURL=banned-mac.controller.js.map