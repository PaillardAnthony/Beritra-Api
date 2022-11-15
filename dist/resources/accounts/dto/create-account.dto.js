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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAccountDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateAccountDto {
    constructor() {
        this.activated = true;
        this.access_level = 0;
        this.membership = 0;
        this.old_membership = 0;
        this.last_server = -1;
        this.last_ip = '';
        this.ip_force = '';
        this.reward_point = 0;
        this.expire = null;
        this.toll = 0;
        this.email = '';
        this.last_mac = '';
        this.luna = 0;
        this.vote = 0;
        this.discord_id = '';
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Object }, name: { required: true, type: () => Object }, password: { required: true, type: () => Object }, activated: { required: true, type: () => Object, default: true }, access_level: { required: true, type: () => Object, default: 0 }, membership: { required: true, type: () => Object, default: 0 }, old_membership: { required: true, type: () => Object, default: 0 }, last_server: { required: true, type: () => Object, default: -1 }, last_ip: { required: true, type: () => Object, default: '' }, ip_force: { required: true, type: () => Object, default: '' }, reward_point: { required: true, type: () => Object, default: 0 }, expire: { required: true, type: () => Object, default: null }, toll: { required: true, type: () => Object, default: 0 }, email: { required: true, type: () => Object, default: '' }, last_mac: { required: true, type: () => Object, default: '' }, luna: { required: true, type: () => Object, default: 0 }, vote: { required: true, type: () => Object, default: 0 }, discord_id: { required: true, type: () => Object, default: '' } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Object)
], CreateAccountDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], CreateAccountDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], CreateAccountDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Object)
], CreateAccountDto.prototype, "activated", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Object)
], CreateAccountDto.prototype, "access_level", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Object)
], CreateAccountDto.prototype, "membership", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Object)
], CreateAccountDto.prototype, "old_membership", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Object)
], CreateAccountDto.prototype, "last_server", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], CreateAccountDto.prototype, "last_ip", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], CreateAccountDto.prototype, "ip_force", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Object)
], CreateAccountDto.prototype, "reward_point", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Object)
], CreateAccountDto.prototype, "expire", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Object)
], CreateAccountDto.prototype, "toll", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], CreateAccountDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], CreateAccountDto.prototype, "last_mac", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Object)
], CreateAccountDto.prototype, "luna", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Object)
], CreateAccountDto.prototype, "vote", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Object)
], CreateAccountDto.prototype, "discord_id", void 0);
exports.CreateAccountDto = CreateAccountDto;
//# sourceMappingURL=create-account.dto.js.map