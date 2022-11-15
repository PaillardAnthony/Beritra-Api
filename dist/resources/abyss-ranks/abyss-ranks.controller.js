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
exports.AbyssRanksController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const abyss_ranks_service_1 = require("./abyss-ranks.service");
const update_abyss_rank_dto_1 = require("./dto/update-abyss-rank.dto");
let AbyssRanksController = class AbyssRanksController {
    constructor(abyssRanksService) {
        this.abyssRanksService = abyssRanksService;
    }
    findAll() {
        return this.abyssRanksService.findAll();
    }
    findOne(id) {
        return this.abyssRanksService.findOne(+id);
    }
    update(id, updateAbyssRankDto) {
        return this.abyssRanksService.update(+id, updateAbyssRankDto);
    }
    remove(id) {
        return this.abyssRanksService.remove(+id);
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("../../entities/AbyssRank").AbyssRank] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AbyssRanksController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: require("../../entities/AbyssRank").AbyssRank }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AbyssRanksController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_abyss_rank_dto_1.UpdateAbyssRankDto]),
    __metadata("design:returntype", void 0)
], AbyssRanksController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AbyssRanksController.prototype, "remove", null);
AbyssRanksController = __decorate([
    (0, common_1.Controller)('abyss-ranks'),
    __metadata("design:paramtypes", [abyss_ranks_service_1.AbyssRanksService])
], AbyssRanksController);
exports.AbyssRanksController = AbyssRanksController;
//# sourceMappingURL=abyss-ranks.controller.js.map