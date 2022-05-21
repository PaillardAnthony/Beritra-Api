import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Players} from "../../../entities/Players";

@Injectable()
export class PlayersService {

  constructor(@InjectRepository(Players) private repository: Repository<Players>) {
  }

  create(createPlayerDto: CreatePlayerDto) {
    return this.repository.create(createPlayerDto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updatePlayerDto: UpdatePlayerDto) {
    return this.repository.update(id, updatePlayerDto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
