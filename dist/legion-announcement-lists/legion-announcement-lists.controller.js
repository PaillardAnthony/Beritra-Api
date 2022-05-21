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
exports.LegionAnnouncementListsController = void 0;
const common_1 = require("@nestjs/common");
const legion_announcement_lists_service_1 = require("./legion-announcement-lists.service");
const create_legion_announcement_list_dto_1 = require("./dto/create-legion-announcement-list.dto");
const update_legion_announcement_list_dto_1 = require("./dto/update-legion-announcement-list.dto");
let LegionAnnouncementListsController = class LegionAnnouncementListsController {
    constructor(legionAnnouncementListsService) {
        this.legionAnnouncementListsService = legionAnnouncementListsService;
    }
    create(createLegionAnnouncementListDto) {
        return this.legionAnnouncementListsService.create(createLegionAnnouncementListDto);
    }
    findAll() {
        return this.legionAnnouncementListsService.findAll();
    }
    findOne(id) {
        return this.legionAnnouncementListsService.findOne(+id);
    }
    update(id, updateLegionAnnouncementListDto) {
        return this.legionAnnouncementListsService.update(+id, updateLegionAnnouncementListDto);
    }
    remove(id) {
        return this.legionAnnouncementListsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_legion_announcement_list_dto_1.CreateLegionAnnouncementListDto]),
    __metadata("design:returntype", void 0)
], LegionAnnouncementListsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LegionAnnouncementListsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LegionAnnouncementListsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_legion_announcement_list_dto_1.UpdateLegionAnnouncementListDto]),
    __metadata("design:returntype", void 0)
], LegionAnnouncementListsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LegionAnnouncementListsController.prototype, "remove", null);
LegionAnnouncementListsController = __decorate([
    (0, common_1.Controller)('legion-announcement-lists'),
    __metadata("design:paramtypes", [legion_announcement_lists_service_1.LegionAnnouncementListsService])
], LegionAnnouncementListsController);
exports.LegionAnnouncementListsController = LegionAnnouncementListsController;
//# sourceMappingURL=legion-announcement-lists.controller.js.map