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
exports.PlayerLifeStatsController = void 0;
const common_1 = require("@nestjs/common");
const player_life_stats_service_1 = require("./player-life-stats.service");
const create_player_life_stat_dto_1 = require("./dto/create-player-life-stat.dto");
const update_player_life_stat_dto_1 = require("./dto/update-player-life-stat.dto");
let PlayerLifeStatsController = class PlayerLifeStatsController {
    constructor(playerLifeStatsService) {
        this.playerLifeStatsService = playerLifeStatsService;
    }
    create(createPlayerLifeStatDto) {
        return this.playerLifeStatsService.create(createPlayerLifeStatDto);
    }
    findAll() {
        return this.playerLifeStatsService.findAll();
    }
    findOne(id) {
        return this.playerLifeStatsService.findOne(+id);
    }
    update(id, updatePlayerLifeStatDto) {
        return this.playerLifeStatsService.update(+id, updatePlayerLifeStatDto);
    }
    remove(id) {
        return this.playerLifeStatsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_player_life_stat_dto_1.CreatePlayerLifeStatDto]),
    __metadata("design:returntype", void 0)
], PlayerLifeStatsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlayerLifeStatsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlayerLifeStatsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_player_life_stat_dto_1.UpdatePlayerLifeStatDto]),
    __metadata("design:returntype", void 0)
], PlayerLifeStatsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlayerLifeStatsController.prototype, "remove", null);
PlayerLifeStatsController = __decorate([
    (0, common_1.Controller)('player-life-stats'),
    __metadata("design:paramtypes", [player_life_stats_service_1.PlayerLifeStatsService])
], PlayerLifeStatsController);
exports.PlayerLifeStatsController = PlayerLifeStatsController;
//# sourceMappingURL=player-life-stats.controller.js.map