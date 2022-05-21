import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
export declare class SurveysService {
    create(createSurveyDto: CreateSurveyDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateSurveyDto: UpdateSurveyDto): string;
    remove(id: number): string;
}
