import { SurveysService } from './surveys.service';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
export declare class SurveysController {
    private readonly surveysService;
    constructor(surveysService: SurveysService);
    create(createSurveyDto: CreateSurveyDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateSurveyDto: UpdateSurveyDto): string;
    remove(id: string): string;
}
