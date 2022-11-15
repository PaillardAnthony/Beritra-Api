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
exports.AbyssRanksService = void 0;
const common_1 = require("@nestjs/common");
const AbyssRank_1 = require("./../../entities/AbyssRank");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let AbyssRanksService = class AbyssRanksService {
    constructor(repository) {
        this.repository = repository;
    }
    findAll() {
        return this.repository.find();
    }
    findOne(id) {
        return this.repository.findOne(id);
    }
    update(id, updateAbyssRankDto) {
        return this.repository.update(id, updateAbyssRankDto);
    }
    remove(id) {
        return this.repository.delete(id);
    }
};
AbyssRanksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(AbyssRank_1.AbyssRank)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AbyssRanksService);
exports.AbyssRanksService = AbyssRanksService;
//# sourceMappingURL=abyss-ranks.service.js.map