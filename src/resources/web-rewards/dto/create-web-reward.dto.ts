import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNumber, isObject, IsString } from "class-validator";
import { Players } from './../../../entities/Players';

export class CreateWebRewardDto {

    @ApiProperty()
    @IsNumber()
    unique: number;

    @ApiProperty()
    item_owner: Players;

    @ApiProperty()
    @IsNumber()
    item_id: number;

    @ApiProperty()
    @IsNumber()
    item_count: number;

    @ApiProperty()
    @IsBoolean()
    rewarded: boolean;

    @ApiProperty()
    @IsString()
    added: string;

    @ApiProperty()
    @IsString()
    received: string;
}
