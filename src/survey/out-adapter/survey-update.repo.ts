import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  SurveyUpdateOutPortInputDto,
  SurveyUpdateOutPortOutputDto,
  UpdateSurveyOutPort,
} from '../out-port/survey-update.op';
import { Survey } from '../survey.entity';

export class UpdateSurveyRepository implements UpdateSurveyOutPort {
  constructor(
    @InjectRepository(Survey) private readonly surveyRepo: Repository<Survey>,
  ) {}

  execute(
    params: SurveyUpdateOutPortInputDto,
  ): Promise<SurveyUpdateOutPortOutputDto> {
    return null;
  }
}
