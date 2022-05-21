"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerEffectsService = void 0;
const common_1 = require("@nestjs/common");
let PlayerEffectsService = class PlayerEffectsService {
    create(createPlayerEffectDto) {
        return 'This action adds a new playerEffect';
    }
    findAll() {
        return `This action returns all playerEffects`;
    }
    findOne(id) {
        return `This action returns a #${id} playerEffect`;
    }
    update(id, updatePlayerEffectDto) {
        return `This action updates a #${id} playerEffect`;
    }
    remove(id) {
        return `This action removes a #${id} playerEffect`;
    }
};
PlayerEffectsService = __decorate([
    (0, common_1.Injectable)()
], PlayerEffectsService);
exports.PlayerEffectsService = PlayerEffectsService;
//# sourceMappingURL=player-effects.service.js.map