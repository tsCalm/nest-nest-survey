import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  DeleteSurveyOutPort,
  SurveyDeleteOutPortInputDto,
  SurveyDeleteOutPortOutputDto,
} from '../out-port/survey-delete.op';
import { Survey } from '../survey.entity';

export class DeleteSurveyRepository implements DeleteSurveyOutPort {
  constructor(
    @InjectRepository(Survey) private readonly surveyRepo: Repository<Survey>,
  ) {}

  execute(
    params: SurveyDeleteOutPortInputDto,
  ): Promise<SurveyDeleteOutPortOutputDto> {
    return null;
  }
}
