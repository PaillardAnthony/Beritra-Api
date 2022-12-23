import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDate, IsNumber, IsString } from 'class-validator';

export class AuthDto {

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
    public activated = true;

    @ApiProperty()
    @IsNumber()
    public access_level = 0;

    @ApiProperty()
    @IsNumber()
    public membership = 0;

    @ApiProperty()
    @IsNumber()
    public old_membership = 0;

    @ApiProperty()
    @IsNumber()
    public last_server = -1;

    @ApiProperty()
    @IsString()
    public last_ip = ''

    @ApiProperty()
    @IsString()
    public ip_force = '';

    @ApiProperty()
    @IsNumber()
    public reward_point = 0;

    @ApiProperty()
    @IsDate()
    public expire = null;

    @ApiProperty()
    @IsNumber()
    public toll = 0;

    @ApiProperty()
    @IsString()
    public email = '';

    @ApiProperty()
    @IsString()
    public last_mac = '';

    @ApiProperty()
    @IsNumber()
    public luna = 0;

    @ApiProperty()
    @IsNumber()
    public vote = 0;q

    @ApiProperty()
    @IsNumber()
    public discord_id = '';

}

