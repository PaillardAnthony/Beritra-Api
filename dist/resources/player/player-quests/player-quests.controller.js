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
exports.PlayerQuestsController = void 0;
const common_1 = require("@nestjs/common");
const player_quests_service_1 = require("./player-quests.service");
const create_player_quest_dto_1 = require("./dto/create-player-quest.dto");
const update_player_quest_dto_1 = require("./dto/update-player-quest.dto");
let PlayerQuestsController = class PlayerQuestsController {
    constructor(playerQuestsService) {
        this.playerQuestsService = playerQuestsService;
    }
    create(createPlayerQuestDto) {
        return this.playerQuestsService.create(createPlayerQuestDto);
    }
    findAll() {
        return this.playerQuestsService.findAll();
    }
    findOne(id) {
        return this.playerQuestsService.findOne(+id);
    }
    update(id, updatePlayerQuestDto) {
        return this.playerQuestsService.update(+id, updatePlayerQuestDto);
    }
    remove(id) {
        return this.playerQuestsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_player_quest_dto_1.CreatePlayerQuestDto]),
    __metadata("design:returntype", void 0)
], PlayerQuestsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlayerQuestsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlayerQuestsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_player_quest_dto_1.UpdatePlayerQuestDto]),
    __metadata("design:returntype", void 0)
], PlayerQuestsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlayerQuestsController.prototype, "remove", null);
PlayerQuestsController = __decorate([
    (0, common_1.Controller)('player-quests'),
    __metadata("design:paramtypes", [player_quests_service_1.PlayerQuestsService])
], PlayerQuestsController);
exports.PlayerQuestsController = PlayerQuestsController;
//# sourceMappingURL=player-quests.controller.js.map