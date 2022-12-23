import {IsBoolean, IsDate, IsNumber, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import { AuthDto } from './auth.dto';

export class CreateAccountDto extends AuthDto {


}
