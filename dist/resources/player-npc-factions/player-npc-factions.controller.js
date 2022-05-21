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
exports.PlayerNpcFactionsController = void 0;
const common_1 = require("@nestjs/common");
const player_npc_factions_service_1 = require("./player-npc-factions.service");
const create_player_npc_faction_dto_1 = require("./dto/create-player-npc-faction.dto");
const update_player_npc_faction_dto_1 = require("./dto/update-player-npc-faction.dto");
let PlayerNpcFactionsController = class PlayerNpcFactionsController {
    constructor(playerNpcFactionsService) {
        this.playerNpcFactionsService = playerNpcFactionsService;
    }
    create(createPlayerNpcFactionDto) {
        return this.playerNpcFactionsService.create(createPlayerNpcFactionDto);
    }
    findAll() {
        return this.playerNpcFactionsService.findAll();
    }
    findOne(id) {
        return this.playerNpcFactionsService.findOne(+id);
    }
    update(id, updatePlayerNpcFactionDto) {
        return this.playerNpcFactionsService.update(+id, updatePlayerNpcFactionDto);
    }
    remove(id) {
        return this.playerNpcFactionsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_player_npc_faction_dto_1.CreatePlayerNpcFactionDto]),
    __metadata("design:returntype", void 0)
], PlayerNpcFactionsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlayerNpcFactionsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlayerNpcFactionsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_player_npc_faction_dto_1.UpdatePlayerNpcFactionDto]),
    __metadata("design:returntype", void 0)
], PlayerNpcFactionsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlayerNpcFactionsController.prototype, "remove", null);
PlayerNpcFactionsController = __decorate([
    (0, common_1.Controller)('player-npc-factions'),
    __metadata("design:paramtypes", [player_npc_factions_service_1.PlayerNpcFactionsService])
], PlayerNpcFactionsController);
exports.PlayerNpcFactionsController = PlayerNpcFactionsController;
//# sourceMappingURL=player-npc-factions.controller.js.map