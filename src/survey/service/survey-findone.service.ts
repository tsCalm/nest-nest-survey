import { Inject, Injectable } from '@nestjs/common';
import {
  FindOneSurveyInPort,
  SurveyFindOneInPortInputDto,
  SurveyFindOneInPortOutputDto,
} from '../in-port/survey-findone.ip';
import {
  FindOneSurveyOutPort,
  FINDONE_SURVEY_OUTBOUND_PORT,
} from '../out-port/survey-findone.op';

@Injectable()
export class SurveyFindOneService implements FindOneSurveyInPort {
  constructor(
    @Inject(FINDONE_SURVEY_OUTBOUND_PORT)
    private readonly findOneSurveyOutPort: FindOneSurveyOutPort,
  ) {}

  execute(
    params: SurveyFindOneInPortInputDto,
  ): Promise<SurveyFindOneInPortOutputDto> {
    return this.findOneSurveyOutPort.execute(params);
  }
}
