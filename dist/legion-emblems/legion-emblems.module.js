"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegionEmblemsModule = void 0;
const common_1 = require("@nestjs/common");
const legion_emblems_service_1 = require("./legion-emblems.service");
const legion_emblems_controller_1 = require("./legion-emblems.controller");
const typeorm_1 = require("@nestjs/typeorm");
const LegionEmblems_1 = require("../entities/LegionEmblems");
let LegionEmblemsModule = class LegionEmblemsModule {
};
LegionEmblemsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([LegionEmblems_1.LegionEmblems])],
        controllers: [legion_emblems_controller_1.LegionEmblemsController],
        providers: [legion_emblems_service_1.LegionEmblemsService]
    })
], LegionEmblemsModule);
exports.LegionEmblemsModule = LegionEmblemsModule;
//# sourceMappingURL=legion-emblems.module.js.map