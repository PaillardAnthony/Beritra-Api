"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerTitlesService = void 0;
const common_1 = require("@nestjs/common");
let PlayerTitlesService = class PlayerTitlesService {
    create(createPlayerTitleDto) {
        return 'This action adds a new playerTitle';
    }
    findAll() {
        return `This action returns all playerTitles`;
    }
    findOne(id) {
        return `This action returns a #${id} playerTitle`;
    }
    update(id, updatePlayerTitleDto) {
        return `This action updates a #${id} playerTitle`;
    }
    remove(id) {
        return `This action removes a #${id} playerTitle`;
    }
};
PlayerTitlesService = __decorate([
    (0, common_1.Injectable)()
], PlayerTitlesService);
exports.PlayerTitlesService = PlayerTitlesService;
//# sourceMappingURL=player-titles.service.js.map