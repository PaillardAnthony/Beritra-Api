import {IsBoolean, IsDate, IsNumber, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateAccountDto {

    @ApiProperty()
    @IsNumber()
    public id;

    @ApiProperty()
    @IsString()
    public name;

    @ApiProperty()
    @IsString()
    public password;

    @ApiProperty()
    @IsBoolean()
    public activated;

    @ApiProperty()
    @IsNumber()
    public access_level;

    @ApiProperty()
    @IsNumber()
    public membership;

    @ApiProperty()
    @IsNumber()
    public old_membership;

    @ApiProperty()
    @IsNumber()
    public last_server;

    @ApiProperty()
    @IsString()
    public last_ip

    @ApiProperty()
    @IsString()
    public ip_force;

    @ApiProperty()
    @IsNumber()
    public reward_points;

    @ApiProperty()
    @IsDate()
    public expire;

    @ApiProperty()
    @IsNumber()
    public toll;

    @ApiProperty()
    @IsString()
    public email;

    @ApiProperty()
    @IsString()
    public last_mac;

    @ApiProperty()
    @IsNumber()
    public luna;

    @ApiProperty()
    @IsNumber()
    public vote;

    @ApiProperty()
    @IsNumber()
    public discord_id;


}
