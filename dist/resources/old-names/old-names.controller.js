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
exports.OldNamesController = void 0;
const common_1 = require("@nestjs/common");
const old_names_service_1 = require("./old-names.service");
const create_old_name_dto_1 = require("./dto/create-old-name.dto");
const update_old_name_dto_1 = require("./dto/update-old-name.dto");
let OldNamesController = class OldNamesController {
    constructor(oldNamesService) {
        this.oldNamesService = oldNamesService;
    }
    create(createOldNameDto) {
        return this.oldNamesService.create(createOldNameDto);
    }
    findAll() {
        return this.oldNamesService.findAll();
    }
    findOne(id) {
        return this.oldNamesService.findOne(+id);
    }
    update(id, updateOldNameDto) {
        return this.oldNamesService.update(+id, updateOldNameDto);
    }
    remove(id) {
        return this.oldNamesService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_old_name_dto_1.CreateOldNameDto]),
    __metadata("design:returntype", void 0)
], OldNamesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OldNamesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OldNamesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_old_name_dto_1.UpdateOldNameDto]),
    __metadata("design:returntype", void 0)
], OldNamesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OldNamesController.prototype, "remove", null);
OldNamesController = __decorate([
    (0, common_1.Controller)('old-names'),
    __metadata("design:paramtypes", [old_names_service_1.OldNamesService])
], OldNamesController);
exports.OldNamesController = OldNamesController;
//# sourceMappingURL=old-names.controller.js.map