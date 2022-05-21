"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerStigmasEquippedsService = void 0;
const common_1 = require("@nestjs/common");
let PlayerStigmasEquippedsService = class PlayerStigmasEquippedsService {
    create(createPlayerStigmasEquippedDto) {
        return 'This action adds a new playerStigmasEquipped';
    }
    findAll() {
        return `This action returns all playerStigmasEquippeds`;
    }
    findOne(id) {
        return `This action returns a #${id} playerStigmasEquipped`;
    }
    update(id, updatePlayerStigmasEquippedDto) {
        return `This action updates a #${id} playerStigmasEquipped`;
    }
    remove(id) {
        return `This action removes a #${id} playerStigmasEquipped`;
    }
};
PlayerStigmasEquippedsService = __decorate([
    (0, common_1.Injectable)()
], PlayerStigmasEquippedsService);
exports.PlayerStigmasEquippedsService = PlayerStigmasEquippedsService;
//# sourceMappingURL=player-stigmas-equippeds.service.js.map