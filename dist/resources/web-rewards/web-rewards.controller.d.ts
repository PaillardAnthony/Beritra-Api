import { WebRewardsService } from './web-rewards.service';
import { CreateWebRewardDto } from './dto/create-web-reward.dto';
import { UpdateWebRewardDto } from './dto/update-web-reward.dto';
export declare class WebRewardsController {
    private readonly webRewardsService;
    constructor(webRewardsService: WebRewardsService);
    create(createWebRewardDto: CreateWebRewardDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateWebRewardDto: UpdateWebRewardDto): string;
    remove(id: string): string;
}
