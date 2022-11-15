import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {AccountData} from "../../entities/AccountData";
import {AuthDto} from "./dto/auth.dto";
import {validate} from "class-validator";
import {env} from "../../configs";
import { sign } from 'jsonwebtoken';

const crypto = require('crypto');

export interface LoginOutput {
  account: Omit<AccountData, 'password' | 'hashPassword'>;
  jwt: string;
}
@Injectable()
export class AccountsService {

  constructor(@InjectRepository(AccountData) private repository: Repository<AccountData>) {
  }


  create(createAccountDto: UpdateAccountDto) {
    return this.repository.save(createAccountDto);
  }

  findAll() {
    return this.repository.find();
  }

  async getByName(name: string) {
    const account = await this.repository.findOne({ name });
    if (account) {
      return account;
    }
    throw new HttpException('User with this email does not exist', HttpStatus.NOT_FOUND);
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    return this.repository.update(id, updateAccountDto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }



  async auth(auth: AuthDto) {
    const account = await this.getByName(auth.name);
    if (account === undefined) {
      throw new HttpException("Bad Login", HttpStatus.UNAUTHORIZED)
    }

    const { password, ...accountWithoutPassword } = account;
    const passwordHash = crypto.createHash('sha1').update(auth.password).digest('base64');
    const isLogged = await passwordHash == account.password;
    if (!isLogged) {
      throw new HttpException("Bad pass " + passwordHash + " " + account.password, HttpStatus.UNAUTHORIZED)
    }
    const loginOutput: LoginOutput = {
      account: accountWithoutPassword,
      jwt: sign(accountWithoutPassword, env.JWT_SECRET, {
        expiresIn: 3600,
      }),
    };

    return loginOutput;
  }

  hashPass(password: string): string {
    return crypto.createHash('sha1').update(password).digest('base64');
  }

}
