import { EventItemsService } from './event-items.service';
import { CreateEventItemDto } from './dto/create-event-item.dto';
import { UpdateEventItemDto } from './dto/update-event-item.dto';
export declare class EventItemsController {
    private readonly eventItemsService;
    constructor(eventItemsService: EventItemsService);
    create(createEventItemDto: CreateEventItemDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateEventItemDto: UpdateEventItemDto): string;
    remove(id: string): string;
}
