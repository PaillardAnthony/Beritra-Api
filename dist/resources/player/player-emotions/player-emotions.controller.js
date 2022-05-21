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
exports.PlayerEmotionsController = void 0;
const common_1 = require("@nestjs/common");
const player_emotions_service_1 = require("./player-emotions.service");
const create_player_emotion_dto_1 = require("./dto/create-player-emotion.dto");
const update_player_emotion_dto_1 = require("./dto/update-player-emotion.dto");
let PlayerEmotionsController = class PlayerEmotionsController {
    constructor(playerEmotionsService) {
        this.playerEmotionsService = playerEmotionsService;
    }
    create(createPlayerEmotionDto) {
        return this.playerEmotionsService.create(createPlayerEmotionDto);
    }
    findAll() {
        return this.playerEmotionsService.findAll();
    }
    findOne(id) {
        return this.playerEmotionsService.findOne(+id);
    }
    update(id, updatePlayerEmotionDto) {
        return this.playerEmotionsService.update(+id, updatePlayerEmotionDto);
    }
    remove(id) {
        return this.playerEmotionsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_player_emotion_dto_1.CreatePlayerEmotionDto]),
    __metadata("design:returntype", void 0)
], PlayerEmotionsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlayerEmotionsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlayerEmotionsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_player_emotion_dto_1.UpdatePlayerEmotionDto]),
    __metadata("design:returntype", void 0)
], PlayerEmotionsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlayerEmotionsController.prototype, "remove", null);
PlayerEmotionsController = __decorate([
    (0, common_1.Controller)('player-emotions'),
    __metadata("design:paramtypes", [player_emotions_service_1.PlayerEmotionsService])
], PlayerEmotionsController);
exports.PlayerEmotionsController = PlayerEmotionsController;
//# sourceMappingURL=player-emotions.controller.js.map