import { Injectable } from '@nestjs/common';
import {
  SurveyUpdateOutPortInputDto,
  SurveyUpdateOutPortOutputDto,
  UpdateSurveyOutPort,
} from '../out-port/survey-update.op';

@Injectable()
export class SurveyUpdateService implements UpdateSurveyOutPort {
  execute(
    params: SurveyUpdateOutPortInputDto,
  ): Promise<SurveyUpdateOutPortOutputDto> {
    return null;
  }
}
