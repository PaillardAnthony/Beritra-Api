"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveysService = void 0;
const common_1 = require("@nestjs/common");
let SurveysService = class SurveysService {
    create(createSurveyDto) {
        return 'This action adds a new survey';
    }
    findAll() {
        return `This action returns all surveys`;
    }
    findOne(id) {
        return `This action returns a #${id} survey`;
    }
    update(id, updateSurveyDto) {
        return `This action updates a #${id} survey`;
    }
    remove(id) {
        return `This action removes a #${id} survey`;
    }
};
SurveysService = __decorate([
    (0, common_1.Injectable)()
], SurveysService);
exports.SurveysService = SurveysService;
//# sourceMappingURL=surveys.service.js.map