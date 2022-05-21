"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerRegisteredItemsService = void 0;
const common_1 = require("@nestjs/common");
let PlayerRegisteredItemsService = class PlayerRegisteredItemsService {
    create(createPlayerRegisteredItemDto) {
        return 'This action adds a new playerRegisteredItem';
    }
    findAll() {
        return `This action returns all playerRegisteredItems`;
    }
    findOne(id) {
        return `This action returns a #${id} playerRegisteredItem`;
    }
    update(id, updatePlayerRegisteredItemDto) {
        return `This action updates a #${id} playerRegisteredItem`;
    }
    remove(id) {
        return `This action removes a #${id} playerRegisteredItem`;
    }
};
PlayerRegisteredItemsService = __decorate([
    (0, common_1.Injectable)()
], PlayerRegisteredItemsService);
exports.PlayerRegisteredItemsService = PlayerRegisteredItemsService;
//# sourceMappingURL=player-registered-items.service.js.map