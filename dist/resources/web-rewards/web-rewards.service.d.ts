import { CreateWebRewardDto } from './dto/create-web-reward.dto';
import { UpdateWebRewardDto } from './dto/update-web-reward.dto';
export declare class WebRewardsService {
    create(createWebRewardDto: CreateWebRewardDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateWebRewardDto: UpdateWebRewardDto): string;
    remove(id: number): string;
}
