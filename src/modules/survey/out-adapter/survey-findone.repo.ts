import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  FindOneSurveyOutPort,
  SurveyFindOneOutPortInputDto,
  SurveyFindOneOutPortOutputDto,
} from '../out-port/survey-findone.op';
import { Survey } from '../survey.entity';

export class FindOneSurveyRepository implements FindOneSurveyOutPort {
  constructor(
    @InjectRepository(Survey) private readonly _surveyRepo: Repository<Survey>,
  ) {}

  execute(
    params: SurveyFindOneOutPortInputDto,
  ): Promise<SurveyFindOneOutPortOutputDto> {
    return this._surveyRepo.findOne({
      where: {
        id: params,
      },
      relations: ['question', 'question.option'],
    });
  }
}
