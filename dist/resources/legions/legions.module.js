"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegionsModule = void 0;
const common_1 = require("@nestjs/common");
const legions_service_1 = require("./legions.service");
const legions_controller_1 = require("./legions.controller");
const typeorm_1 = require("@nestjs/typeorm");
const Legions_1 = require("../../entities/Legions");
let LegionsModule = class LegionsModule {
};
LegionsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Legions_1.Legions])],
        controllers: [legions_controller_1.LegionsController],
        providers: [legions_service_1.LegionsService]
    })
], LegionsModule);
exports.LegionsModule = LegionsModule;
//# sourceMappingURL=legions.module.js.map