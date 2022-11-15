import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { AuthDto } from "./dto/auth.dto";
export declare class AccountsController {
    private readonly accountsService;
    constructor(accountsService: AccountsService);
    create(createAccountDto: CreateAccountDto): Promise<UpdateAccountDto & import("../../entities/AccountData").AccountData>;
    findAll(): Promise<import("../../entities/AccountData").AccountData[]>;
    findOne(id: string): Promise<import("../../entities/AccountData").AccountData>;
    update(id: string, updateAccountDto: UpdateAccountDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    login(login: AuthDto): Promise<import("./accounts.service").LoginOutput>;
    register(name: string, password: string): Promise<UpdateAccountDto & import("../../entities/AccountData").AccountData>;
}
