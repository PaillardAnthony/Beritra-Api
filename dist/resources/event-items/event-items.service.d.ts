import { CreateEventItemDto } from './dto/create-event-item.dto';
import { UpdateEventItemDto } from './dto/update-event-item.dto';
export declare class EventItemsService {
    create(createEventItemDto: CreateEventItemDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateEventItemDto: UpdateEventItemDto): string;
    remove(id: number): string;
}
