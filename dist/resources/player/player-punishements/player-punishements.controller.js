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
exports.PlayerPunishementsController = void 0;
const common_1 = require("@nestjs/common");
const player_punishements_service_1 = require("./player-punishements.service");
const create_player_punishement_dto_1 = require("./dto/create-player-punishement.dto");
const update_player_punishement_dto_1 = require("./dto/update-player-punishement.dto");
let PlayerPunishementsController = class PlayerPunishementsController {
    constructor(playerPunishementsService) {
        this.playerPunishementsService = playerPunishementsService;
    }
    create(createPlayerPunishementDto) {
        return this.playerPunishementsService.create(createPlayerPunishementDto);
    }
    findAll() {
        return this.playerPunishementsService.findAll();
    }
    findOne(id) {
        return this.playerPunishementsService.findOne(+id);
    }
    update(id, updatePlayerPunishementDto) {
        return this.playerPunishementsService.update(+id, updatePlayerPunishementDto);
    }
    remove(id) {
        return this.playerPunishementsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_player_punishement_dto_1.CreatePlayerPunishementDto]),
    __metadata("design:returntype", void 0)
], PlayerPunishementsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlayerPunishementsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlayerPunishementsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_player_punishement_dto_1.UpdatePlayerPunishementDto]),
    __metadata("design:returntype", void 0)
], PlayerPunishementsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlayerPunishementsController.prototype, "remove", null);
PlayerPunishementsController = __decorate([
    (0, common_1.Controller)('player-punishements'),
    __metadata("design:paramtypes", [player_punishements_service_1.PlayerPunishementsService])
], PlayerPunishementsController);
exports.PlayerPunishementsController = PlayerPunishementsController;
//# sourceMappingURL=player-punishements.controller.js.map