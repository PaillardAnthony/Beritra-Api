"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegionMembersModule = void 0;
const common_1 = require("@nestjs/common");
const legion_members_service_1 = require("./legion-members.service");
const legion_members_controller_1 = require("./legion-members.controller");
const typeorm_1 = require("@nestjs/typeorm");
const LegionMembers_1 = require("../../entities/LegionMembers");
let LegionMembersModule = class LegionMembersModule {
};
LegionMembersModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([LegionMembers_1.LegionMembers])],
        controllers: [legion_members_controller_1.LegionMembersController],
        providers: [legion_members_service_1.LegionMembersService]
    })
], LegionMembersModule);
exports.LegionMembersModule = LegionMembersModule;
//# sourceMappingURL=legion-members.module.js.map