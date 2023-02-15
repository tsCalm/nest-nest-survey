import { Inject, Injectable } from '@nestjs/common';
import {
  CreateSurveyInPort,
  SurveyCreateInPortInputDto,
  SurveyCreateInPortOutputDto,
} from '../in-port/survey-create.ip';
import {
  CreateSurveyOutPort,
  CREATE_SURVEY_OUTBOUND_PORT,
} from '../out-port/survey-create.op';

@Injectable()
export class SurveyCreateService implements CreateSurveyInPort {
  constructor(
    @Inject(CREATE_SURVEY_OUTBOUND_PORT)
    private readonly createSurveyInPort: CreateSurveyOutPort,
  ) {}
  execute(
    params: SurveyCreateInPortInputDto,
  ): Promise<SurveyCreateInPortOutputDto> {
    return this.createSurveyInPort.execute(params);
  }
}
