import { Injectable } from '@nestjs/common';
import { CreatePlayerQuestDto } from './dto/create-player-quest.dto';
import { UpdatePlayerQuestDto } from './dto/update-player-quest.dto';

@Injectable()
export class PlayerQuestsService {
  create(createPlayerQuestDto: CreatePlayerQuestDto) {
    return 'This action adds a new playerQuest';
  }

  findAll() {
    return `This action returns all playerQuests`;
  }

  findOne(id: number) {
    return `This action returns a #${id} playerQuest`;
  }

  update(id: number, updatePlayerQuestDto: UpdatePlayerQuestDto) {
    return `This action updates a #${id} playerQuest`;
  }

  remove(id: number) {
    return `This action removes a #${id} playerQuest`;
  }
}
