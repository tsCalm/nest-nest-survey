import { Inject, Injectable } from '@nestjs/common';
import {
  FindAllSurveyInPort,
  SurveyFindAllInPortInputDto,
  SurveyFindAllInPortOutputDto,
} from '../in-port/survey-findall.ip';
import {
  FindAllSurveyOutPort,
  FINDALL_SURVEY_OUTBOUND_PORT,
} from '../out-port/survey-findall.op';

@Injectable()
export class SurveyFindAllService implements FindAllSurveyInPort {
  constructor() {}
  execute(
    params: SurveyFindAllInPortInputDto,
  ): Promise<SurveyFindAllInPortOutputDto> {
    return null;
  }
}
