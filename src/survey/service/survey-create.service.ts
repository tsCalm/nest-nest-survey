import { Injectable } from '@nestjs/common';
import {
  CreateSurveyInPort,
  SurveyCreateInPortInputDto,
  SurveyCreateInPortOutputDto,
} from '../in-port/survey-create.ip';

@Injectable()
export class SurveyCreateService implements CreateSurveyInPort {
  execute(
    params: SurveyCreateInPortInputDto,
  ): Promise<SurveyCreateInPortOutputDto> {
    return null;
  }
}
