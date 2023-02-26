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

  execute(
    params: SurveySearchOutPortInputDto,
  ): Promise<SurveySearchOutPortOutputDto> {
    return this._surveyRepo.find({
      where: {
        name: Like(`%${params.keyword}%`),
      },
      skip: (params.page - 1) * params.size,
      take: params.size,
      order: {
        name: params.sort,
      },
    });
  }
}
