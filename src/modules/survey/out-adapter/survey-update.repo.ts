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
    @InjectRepository(Survey) private readonly _surveyRepo: Repository<Survey>,
  ) {}

  async execute(
    params: SurveyUpdateOutPortInputDto,
  ): Promise<SurveyUpdateOutPortOutputDto> {
    const findedSurvey = await this._surveyRepo.findOne({
      where: {
        id: params.id,
      },
    });
    return this._surveyRepo.save({ ...findedSurvey, ...params });
  }
}
