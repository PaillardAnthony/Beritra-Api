import { PartialType } from '@nestjs/swagger';
import { CreateAbyssRankDto } from './create-abyss-rank.dto';

export class UpdateAbyssRankDto extends PartialType(CreateAbyssRankDto) {}
