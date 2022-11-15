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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const AccountData_1 = require("../../entities/AccountData");
const configs_1 = require("../../configs");
const jsonwebtoken_1 = require("jsonwebtoken");
const crypto = require('crypto');
let AccountsService = class AccountsService {
    constructor(repository) {
        this.repository = repository;
    }
    create(createAccountDto) {
        return this.repository.save(createAccountDto);
    }
    findAll() {
        return this.repository.find();
    }
    async getByName(name) {
        const account = await this.repository.findOne({ name });
        if (account) {
            return account;
        }
        throw new common_1.HttpException('User with this email does not exist', common_1.HttpStatus.NOT_FOUND);
    }
    findOne(id) {
        return this.repository.findOne(id);
    }
    update(id, updateAccountDto) {
        return this.repository.update(id, updateAccountDto);
    }
    remove(id) {
        return this.repository.delete(id);
    }
    async auth(auth) {
        const account = await this.getByName(auth.name);
        if (account === undefined) {
            throw new common_1.HttpException("Bad Login", common_1.HttpStatus.UNAUTHORIZED);
        }
        const { password } = account, accountWithoutPassword = __rest(account, ["password"]);
        const passwordHash = crypto.createHash('sha1').update(auth.password).digest('base64');
        const isLogged = await passwordHash == account.password;
        if (!isLogged) {
            throw new common_1.HttpException("Bad pass " + passwordHash + " " + account.password, common_1.HttpStatus.UNAUTHORIZED);
        }
        const loginOutput = {
            account: accountWithoutPassword,
            jwt: (0, jsonwebtoken_1.sign)(accountWithoutPassword, configs_1.env.JWT_SECRET, {
                expiresIn: 3600,
            }),
        };
        return loginOutput;
    }
    hashPass(password) {
        return crypto.createHash('sha1').update(password).digest('base64');
    }
};
AccountsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(AccountData_1.AccountData)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AccountsService);
exports.AccountsService = AccountsService;
//# sourceMappingURL=accounts.service.js.map