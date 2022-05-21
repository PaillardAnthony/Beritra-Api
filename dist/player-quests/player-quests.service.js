"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerQuestsService = void 0;
const common_1 = require("@nestjs/common");
let PlayerQuestsService = class PlayerQuestsService {
    create(createPlayerQuestDto) {
        return 'This action adds a new playerQuest';
    }
    findAll() {
        return `This action returns all playerQuests`;
    }
    findOne(id) {
        return `This action returns a #${id} playerQuest`;
    }
    update(id, updatePlayerQuestDto) {
        return `This action updates a #${id} playerQuest`;
    }
    remove(id) {
        return `This action removes a #${id} playerQuest`;
    }
};
PlayerQuestsService = __decorate([
    (0, common_1.Injectable)()
], PlayerQuestsService);
exports.PlayerQuestsService = PlayerQuestsService;
//# sourceMappingURL=player-quests.service.js.map