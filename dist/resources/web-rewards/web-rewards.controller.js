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
exports.WebRewardsController = void 0;
const common_1 = require("@nestjs/common");
const web_rewards_service_1 = require("./web-rewards.service");
const create_web_reward_dto_1 = require("./dto/create-web-reward.dto");
const update_web_reward_dto_1 = require("./dto/update-web-reward.dto");
let WebRewardsController = class WebRewardsController {
    constructor(webRewardsService) {
        this.webRewardsService = webRewardsService;
    }
    create(createWebRewardDto) {
        return this.webRewardsService.create(createWebRewardDto);
    }
    findAll() {
        return this.webRewardsService.findAll();
    }
    findOne(id) {
        return this.webRewardsService.findOne(+id);
    }
    update(id, updateWebRewardDto) {
        return this.webRewardsService.update(+id, updateWebRewardDto);
    }
    remove(id) {
        return this.webRewardsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_web_reward_dto_1.CreateWebRewardDto]),
    __metadata("design:returntype", void 0)
], WebRewardsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WebRewardsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WebRewardsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_web_reward_dto_1.UpdateWebRewardDto]),
    __metadata("design:returntype", void 0)
], WebRewardsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WebRewardsController.prototype, "remove", null);
WebRewardsController = __decorate([
    (0, common_1.Controller)('web-rewards'),
    __metadata("design:paramtypes", [web_rewards_service_1.WebRewardsService])
], WebRewardsController);
exports.WebRewardsController = WebRewardsController;
//# sourceMappingURL=web-rewards.controller.js.map