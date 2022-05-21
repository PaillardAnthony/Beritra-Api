"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OldNamesModule = void 0;
const common_1 = require("@nestjs/common");
const old_names_service_1 = require("./old-names.service");
const old_names_controller_1 = require("./old-names.controller");
const typeorm_1 = require("@nestjs/typeorm");
const OldNames_1 = require("../../entities/OldNames");
let OldNamesModule = class OldNamesModule {
};
OldNamesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([OldNames_1.OldNames])],
        controllers: [old_names_controller_1.OldNamesController],
        providers: [old_names_service_1.OldNamesService]
    })
], OldNamesModule);
exports.OldNamesModule = OldNamesModule;
//# sourceMappingURL=old-names.module.js.map