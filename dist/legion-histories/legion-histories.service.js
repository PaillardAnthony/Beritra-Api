"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegionHistoriesService = void 0;
const common_1 = require("@nestjs/common");
let LegionHistoriesService = class LegionHistoriesService {
    create(createLegionHistoryDto) {
        return 'This action adds a new legionHistory';
    }
    findAll() {
        return `This action returns all legionHistories`;
    }
    findOne(id) {
        return `This action returns a #${id} legionHistory`;
    }
    update(id, updateLegionHistoryDto) {
        return `This action updates a #${id} legionHistory`;
    }
    remove(id) {
        return `This action removes a #${id} legionHistory`;
    }
};
LegionHistoriesService = __decorate([
    (0, common_1.Injectable)()
], LegionHistoriesService);
exports.LegionHistoriesService = LegionHistoriesService;
//# sourceMappingURL=legion-histories.service.js.map