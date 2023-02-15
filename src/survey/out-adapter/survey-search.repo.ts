import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  SearchSurveyOutPort,
  SurveySearchOutPortInputDto,
  SurveySearchOutPortOutputDto,
} from '../out-port/survey-search.op';
import { Survey } from '../survey.entity';

export class SearchSurveyRepository implements SearchSurveyOutPort {
  constructor(
    @InjectRepository(Survey) private readonly surveyRepo: Repository<Survey>,
  ) {}

  execute(
    params: SurveySearchOutPortInputDto,
  ): Promise<SurveySearchOutPortOutputDto> {
    return null;
  }
}
