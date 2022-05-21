import { Injectable } from '@nestjs/common';
import { CreateBannedIpDto } from './dto/create-banned-ip.dto';
import { UpdateBannedIpDto } from './dto/update-banned-ip.dto';

@Injectable()
export class BannedIpService {
  create(createBannedIpDto: CreateBannedIpDto) {
    return 'This action adds a new bannedIp';
  }

  findAll() {
    return `This action returns all bannedIp`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bannedIp`;
  }

  update(id: number, updateBannedIpDto: UpdateBannedIpDto) {
    return `This action updates a #${id} bannedIp`;
  }

  remove(id: number) {
    return `This action removes a #${id} bannedIp`;
  }
}
