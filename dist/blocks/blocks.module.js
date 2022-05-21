"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlocksModule = void 0;
const common_1 = require("@nestjs/common");
const blocks_service_1 = require("./blocks.service");
const blocks_controller_1 = require("./blocks.controller");
const typeorm_1 = require("@nestjs/typeorm");
const Blocks_1 = require("../entities/Blocks");
let BlocksModule = class BlocksModule {
};
BlocksModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Blocks_1.Blocks])],
        controllers: [blocks_controller_1.BlocksController],
        providers: [blocks_service_1.BlocksService]
    })
], BlocksModule);
exports.BlocksModule = BlocksModule;
//# sourceMappingURL=blocks.module.js.map