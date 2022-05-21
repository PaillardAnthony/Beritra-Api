import { Injectable } from '@nestjs/common';
import { CreateBannedMacDto } from './dto/create-banned-mac.dto';
import { UpdateBannedMacDto } from './dto/update-banned-mac.dto';

@Injectable()
export class BannedMacService {
  create(createBannedMacDto: CreateBannedMacDto) {
    return 'This action adds a new bannedMac';
  }

  findAll() {
    return `This action returns all bannedMac`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bannedMac`;
  }

  update(id: number, updateBannedMacDto: UpdateBannedMacDto) {
    return `This action updates a #${id} bannedMac`;
  }

  remove(id: number) {
    return `This action removes a #${id} bannedMac`;
  }
}
