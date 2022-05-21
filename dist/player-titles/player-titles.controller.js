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
exports.PlayerTitlesController = void 0;
const common_1 = require("@nestjs/common");
const player_titles_service_1 = require("./player-titles.service");
const create_player_title_dto_1 = require("./dto/create-player-title.dto");
const update_player_title_dto_1 = require("./dto/update-player-title.dto");
let PlayerTitlesController = class PlayerTitlesController {
    constructor(playerTitlesService) {
        this.playerTitlesService = playerTitlesService;
    }
    create(createPlayerTitleDto) {
        return this.playerTitlesService.create(createPlayerTitleDto);
    }
    findAll() {
        return this.playerTitlesService.findAll();
    }
    findOne(id) {
        return this.playerTitlesService.findOne(+id);
    }
    update(id, updatePlayerTitleDto) {
        return this.playerTitlesService.update(+id, updatePlayerTitleDto);
    }
    remove(id) {
        return this.playerTitlesService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_player_title_dto_1.CreatePlayerTitleDto]),
    __metadata("design:returntype", void 0)
], PlayerTitlesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlayerTitlesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlayerTitlesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_player_title_dto_1.UpdatePlayerTitleDto]),
    __metadata("design:returntype", void 0)
], PlayerTitlesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlayerTitlesController.prototype, "remove", null);
PlayerTitlesController = __decorate([
    (0, common_1.Controller)('player-titles'),
    __metadata("design:paramtypes", [player_titles_service_1.PlayerTitlesService])
], PlayerTitlesController);
exports.PlayerTitlesController = PlayerTitlesController;
//# sourceMappingURL=player-titles.controller.js.map