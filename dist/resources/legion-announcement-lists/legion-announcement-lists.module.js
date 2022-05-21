"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegionAnnouncementListsModule = void 0;
const common_1 = require("@nestjs/common");
const legion_announcement_lists_service_1 = require("./legion-announcement-lists.service");
const legion_announcement_lists_controller_1 = require("./legion-announcement-lists.controller");
const typeorm_1 = require("@nestjs/typeorm");
const LegionAnnouncementList_1 = require("../../entities/LegionAnnouncementList");
let LegionAnnouncementListsModule = class LegionAnnouncementListsModule {
};
LegionAnnouncementListsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([LegionAnnouncementList_1.LegionAnnouncementList])],
        controllers: [legion_announcement_lists_controller_1.LegionAnnouncementListsController],
        providers: [legion_announcement_lists_service_1.LegionAnnouncementListsService]
    })
], LegionAnnouncementListsModule);
exports.LegionAnnouncementListsModule = LegionAnnouncementListsModule;
//# sourceMappingURL=legion-announcement-lists.module.js.map