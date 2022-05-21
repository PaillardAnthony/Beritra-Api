"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerPunishementsService = void 0;
const common_1 = require("@nestjs/common");
let PlayerPunishementsService = class PlayerPunishementsService {
    create(createPlayerPunishementDto) {
        return 'This action adds a new playerPunishement';
    }
    findAll() {
        return `This action returns all playerPunishements`;
    }
    findOne(id) {
        return `This action returns a #${id} playerPunishement`;
    }
    update(id, updatePlayerPunishementDto) {
        return `This action updates a #${id} playerPunishement`;
    }
    remove(id) {
        return `This action removes a #${id} playerPunishement`;
    }
};
PlayerPunishementsService = __decorate([
    (0, common_1.Injectable)()
], PlayerPunishementsService);
exports.PlayerPunishementsService = PlayerPunishementsService;
//# sourceMappingURL=player-punishements.service.js.map