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
exports.PlayerMotionsController = void 0;
const common_1 = require("@nestjs/common");
const player_motions_service_1 = require("./player-motions.service");
const create_player_motion_dto_1 = require("./dto/create-player-motion.dto");
const update_player_motion_dto_1 = require("./dto/update-player-motion.dto");
let PlayerMotionsController = class PlayerMotionsController {
    constructor(playerMotionsService) {
        this.playerMotionsService = playerMotionsService;
    }
    create(createPlayerMotionDto) {
        return this.playerMotionsService.create(createPlayerMotionDto);
    }
    findAll() {
        return this.playerMotionsService.findAll();
    }
    findOne(id) {
        return this.playerMotionsService.findOne(+id);
    }
    update(id, updatePlayerMotionDto) {
        return this.playerMotionsService.update(+id, updatePlayerMotionDto);
    }
    remove(id) {
        return this.playerMotionsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_player_motion_dto_1.CreatePlayerMotionDto]),
    __metadata("design:returntype", void 0)
], PlayerMotionsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlayerMotionsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlayerMotionsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_player_motion_dto_1.UpdatePlayerMotionDto]),
    __metadata("design:returntype", void 0)
], PlayerMotionsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlayerMotionsController.prototype, "remove", null);
PlayerMotionsController = __decorate([
    (0, common_1.Controller)('player-motions'),
    __metadata("design:paramtypes", [player_motions_service_1.PlayerMotionsService])
], PlayerMotionsController);
exports.PlayerMotionsController = PlayerMotionsController;
//# sourceMappingURL=player-motions.controller.js.map