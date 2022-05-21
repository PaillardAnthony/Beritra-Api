import { Injectable } from '@nestjs/common';
import { CreatePortalCooldownDto } from './dto/create-portal-cooldown.dto';
import { UpdatePortalCooldownDto } from './dto/update-portal-cooldown.dto';

@Injectable()
export class PortalCooldownsService {
  create(createPortalCooldownDto: CreatePortalCooldownDto) {
    return 'This action adds a new portalCooldown';
  }

  findAll() {
    return `This action returns all portalCooldowns`;
  }

  findOne(id: number) {
    return `This action returns a #${id} portalCooldown`;
  }

  update(id: number, updatePortalCooldownDto: UpdatePortalCooldownDto) {
    return `This action updates a #${id} portalCooldown`;
  }

  remove(id: number) {
    return `This action removes a #${id} portalCooldown`;
  }
}
