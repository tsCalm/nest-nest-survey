import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import {
  DeleteSurveyOutPort,
  SurveyDeleteOutPortInputDto,
  SurveyDeleteOutPortOutputDto,
} from '../out-port/survey-delete.op';
import { Survey } from '../survey.entity';

export class DeleteSurveyRepository implements DeleteSurveyOutPort {
  constructor(
    @InjectRepository(Survey) private readonly _surveyRepo: Repository<Survey>,
  ) {}

  async execute(
    params: SurveyDeleteOutPortInputDto,
  ): Promise<SurveyDeleteOutPortOutputDto> {
    const result: DeleteResult = await this._surveyRepo.delete(params);
    // DeleteResult { raw: [], affected: 1 }
    return result.affected;
  }
}
