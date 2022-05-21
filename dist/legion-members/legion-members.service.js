"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegionMembersService = void 0;
const common_1 = require("@nestjs/common");
let LegionMembersService = class LegionMembersService {
    create(createLegionMemberDto) {
        return 'This action adds a new legionMember';
    }
    findAll() {
        return `This action returns all legionMembers`;
    }
    findOne(id) {
        return `This action returns a #${id} legionMember`;
    }
    update(id, updateLegionMemberDto) {
        return `This action updates a #${id} legionMember`;
    }
    remove(id) {
        return `This action removes a #${id} legionMember`;
    }
};
LegionMembersService = __decorate([
    (0, common_1.Injectable)()
], LegionMembersService);
exports.LegionMembersService = LegionMembersService;
//# sourceMappingURL=legion-members.service.js.map