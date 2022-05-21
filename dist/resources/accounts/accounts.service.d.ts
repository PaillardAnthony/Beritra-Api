import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Repository } from "typeorm";
import { AccountData } from "../../entities/AccountData";
import { AuthDto } from "./dto/auth.dto";
export interface LoginOutput {
    account: Omit<AccountData, 'password' | 'hashPassword'>;
    jwt: string;
}
export declare class AccountsService {
    private repository;
    constructor(repository: Repository<AccountData>);
    create(createAccountDto: CreateAccountDto): AccountData;
    findAll(): Promise<AccountData[]>;
    getByName(name: string): Promise<AccountData>;
    findOne(id: number): Promise<AccountData>;
    update(id: number, updateAccountDto: UpdateAccountDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    auth(auth: AuthDto): Promise<LoginOutput>;
}
