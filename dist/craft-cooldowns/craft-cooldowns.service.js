"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CraftCooldownsService = void 0;
const common_1 = require("@nestjs/common");
let CraftCooldownsService = class CraftCooldownsService {
    create(createCraftCooldownDto) {
        return 'This action adds a new craftCooldown';
    }
    findAll() {
        return `This action returns all craftCooldowns`;
    }
    findOne(id) {
        return `This action returns a #${id} craftCooldown`;
    }
    update(id, updateCraftCooldownDto) {
        return `This action updates a #${id} craftCooldown`;
    }
    remove(id) {
        return `This action removes a #${id} craftCooldown`;
    }
};
CraftCooldownsService = __decorate([
    (0, common_1.Injectable)()
], CraftCooldownsService);
exports.CraftCooldownsService = CraftCooldownsService;
//# sourceMappingURL=craft-cooldowns.service.js.map