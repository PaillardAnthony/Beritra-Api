"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuidesModule = void 0;
const common_1 = require("@nestjs/common");
const guides_service_1 = require("./guides.service");
const guides_controller_1 = require("./guides.controller");
const typeorm_1 = require("@nestjs/typeorm");
const Guides_1 = require("../entities/Guides");
let GuidesModule = class GuidesModule {
};
GuidesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Guides_1.Guides])],
        controllers: [guides_controller_1.GuidesController],
        providers: [guides_service_1.GuidesService]
    })
], GuidesModule);
exports.GuidesModule = GuidesModule;
//# sourceMappingURL=guides.module.js.map