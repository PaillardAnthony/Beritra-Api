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
exports.PlayerPetsController = void 0;
const common_1 = require("@nestjs/common");
const player_pets_service_1 = require("./player-pets.service");
const create_player_pet_dto_1 = require("./dto/create-player-pet.dto");
const update_player_pet_dto_1 = require("./dto/update-player-pet.dto");
let PlayerPetsController = class PlayerPetsController {
    constructor(playerPetsService) {
        this.playerPetsService = playerPetsService;
    }
    create(createPlayerPetDto) {
        return this.playerPetsService.create(createPlayerPetDto);
    }
    findAll() {
        return this.playerPetsService.findAll();
    }
    findOne(id) {
        return this.playerPetsService.findOne(+id);
    }
    update(id, updatePlayerPetDto) {
        return this.playerPetsService.update(+id, updatePlayerPetDto);
    }
    remove(id) {
        return this.playerPetsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_player_pet_dto_1.CreatePlayerPetDto]),
    __metadata("design:returntype", void 0)
], PlayerPetsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlayerPetsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlayerPetsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_player_pet_dto_1.UpdatePlayerPetDto]),
    __metadata("design:returntype", void 0)
], PlayerPetsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlayerPetsController.prototype, "remove", null);
PlayerPetsController = __decorate([
    (0, common_1.Controller)('player-pets'),
    __metadata("design:paramtypes", [player_pets_service_1.PlayerPetsService])
], PlayerPetsController);
exports.PlayerPetsController = PlayerPetsController;
//# sourceMappingURL=player-pets.controller.js.map