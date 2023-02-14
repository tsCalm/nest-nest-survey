import { Injectable } from '@nestjs/common';
import {
  CreateSurveyOutPort,
  SurveyCreateOutPortInputDto,
  SurveyCreateOutPortOutputDto,
} from '../out-port/survey-create.op';

@Injectable()
export class SurveyCreateService implements CreateSurveyOutPort {
  execute(
    params: SurveyCreateOutPortInputDto,
  ): Promise<SurveyCreateOutPortOutputDto> {
    return null;
  }
}
