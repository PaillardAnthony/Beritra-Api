"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerMotionsService = void 0;
const common_1 = require("@nestjs/common");
let PlayerMotionsService = class PlayerMotionsService {
    create(createPlayerMotionDto) {
        return 'This action adds a new playerMotion';
    }
    findAll() {
        return `This action returns all playerMotions`;
    }
    findOne(id) {
        return `This action returns a #${id} playerMotion`;
    }
    update(id, updatePlayerMotionDto) {
        return `This action updates a #${id} playerMotion`;
    }
    remove(id) {
        return `This action removes a #${id} playerMotion`;
    }
};
PlayerMotionsService = __decorate([
    (0, common_1.Injectable)()
], PlayerMotionsService);
exports.PlayerMotionsService = PlayerMotionsService;
//# sourceMappingURL=player-motions.service.js.map