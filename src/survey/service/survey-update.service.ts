import { Injectable } from '@nestjs/common';
import {
  SurveyUpdateInPortInputDto,
  SurveyUpdateInPortOutputDto,
  UpdateSurveyInPort,
} from '../in-port/survey-update.ip';

@Injectable()
export class SurveyUpdateService implements UpdateSurveyInPort {
  execute(
    params: SurveyUpdateInPortInputDto,
  ): Promise<SurveyUpdateInPortOutputDto> {
    return null;
  }
}
