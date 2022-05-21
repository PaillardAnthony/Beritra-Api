"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerCpsService = void 0;
const common_1 = require("@nestjs/common");
let PlayerCpsService = class PlayerCpsService {
    create(createPlayerCpDto) {
        return 'This action adds a new playerCp';
    }
    findAll() {
        return `This action returns all playerCps`;
    }
    findOne(id) {
        return `This action returns a #${id} playerCp`;
    }
    update(id, updatePlayerCpDto) {
        return `This action updates a #${id} playerCp`;
    }
    remove(id) {
        return `This action removes a #${id} playerCp`;
    }
};
PlayerCpsService = __decorate([
    (0, common_1.Injectable)()
], PlayerCpsService);
exports.PlayerCpsService = PlayerCpsService;
//# sourceMappingURL=player-cps.service.js.map