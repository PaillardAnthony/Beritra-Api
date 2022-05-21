"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegionHistoriesModule = void 0;
const common_1 = require("@nestjs/common");
const legion_histories_service_1 = require("./legion-histories.service");
const legion_histories_controller_1 = require("./legion-histories.controller");
const typeorm_1 = require("@nestjs/typeorm");
const LegionHistory_1 = require("../../entities/LegionHistory");
let LegionHistoriesModule = class LegionHistoriesModule {
};
LegionHistoriesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([LegionHistory_1.LegionHistory])],
        controllers: [legion_histories_controller_1.LegionHistoriesController],
        providers: [legion_histories_service_1.LegionHistoriesService]
    })
], LegionHistoriesModule);
exports.LegionHistoriesModule = LegionHistoriesModule;
//# sourceMappingURL=legion-histories.module.js.map