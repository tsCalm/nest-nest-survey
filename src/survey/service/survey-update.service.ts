import { Inject, Injectable } from '@nestjs/common';
import {
  SurveyUpdateInPortInputDto,
  SurveyUpdateInPortOutputDto,
  UpdateSurveyInPort,
} from '../in-port/survey-update.ip';
import {
  UpdateSurveyOutPort,
  UPDATE_SURVEY_OUTBOUND_PORT,
} from '../out-port/survey-update.op';

@Injectable()
export class SurveyUpdateService implements UpdateSurveyInPort {
  constructor() {}

  execute(
    params: SurveyUpdateInPortInputDto,
  ): Promise<SurveyUpdateInPortOutputDto> {
    return null;
  }
}
