import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import {
  SearchSurveyOutPort,
  SurveySearchOutPortInputDto,
  SurveySearchOutPortOutputDto,
} from '../out-port/survey-search.op';
import { Survey } from '../survey.entity';

export class SearchSurveyRepository implements SearchSurveyOutPort {
  constructor(
    @InjectRepository(Survey) private readonly _surveyRepo: Repository<Survey>,
  ) {}

  async execute(
    params: SurveySearchOutPortInputDto,
  ): Promise<SurveySearchOutPortOutputDto> {
    return await this._surveyRepo
      .createQueryBuilder('survey')
      .select(['survey.id', 'survey.name', 'survey.description'])
      .where(`MATCH(survey.name) AGAINST ('${params.keyword}' IN BOOLEAN MODE)`)
      // .where(`survey.name like "%${params.keyword}%"`)
      .skip((params.page - 1) * params.size)
      .take(params.size)
      .orderBy('survey.name', params.sort)
      .getManyAndCount();
  }
}
