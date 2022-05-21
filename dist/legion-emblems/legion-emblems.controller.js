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
exports.LegionEmblemsController = void 0;
const common_1 = require("@nestjs/common");
const legion_emblems_service_1 = require("./legion-emblems.service");
const create_legion_emblem_dto_1 = require("./dto/create-legion-emblem.dto");
const update_legion_emblem_dto_1 = require("./dto/update-legion-emblem.dto");
let LegionEmblemsController = class LegionEmblemsController {
    constructor(legionEmblemsService) {
        this.legionEmblemsService = legionEmblemsService;
    }
    create(createLegionEmblemDto) {
        return this.legionEmblemsService.create(createLegionEmblemDto);
    }
    findAll() {
        return this.legionEmblemsService.findAll();
    }
    findOne(id) {
        return this.legionEmblemsService.findOne(+id);
    }
    update(id, updateLegionEmblemDto) {
        return this.legionEmblemsService.update(+id, updateLegionEmblemDto);
    }
    remove(id) {
        return this.legionEmblemsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_legion_emblem_dto_1.CreateLegionEmblemDto]),
    __metadata("design:returntype", void 0)
], LegionEmblemsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LegionEmblemsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LegionEmblemsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_legion_emblem_dto_1.UpdateLegionEmblemDto]),
    __metadata("design:returntype", void 0)
], LegionEmblemsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LegionEmblemsController.prototype, "remove", null);
LegionEmblemsController = __decorate([
    (0, common_1.Controller)('legion-emblems'),
    __metadata("design:paramtypes", [legion_emblems_service_1.LegionEmblemsService])
], LegionEmblemsController);
exports.LegionEmblemsController = LegionEmblemsController;
//# sourceMappingURL=legion-emblems.controller.js.map