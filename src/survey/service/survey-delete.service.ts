import { Inject, Injectable } from '@nestjs/common';
import {
  DeleteSurveyInPort,
  SurveyDeleteInPortInputDto,
  SurveyDeleteInPortOutputDto,
} from '../in-port/survey-delete.ip';
import {
  DeleteSurveyOutPort,
  DELETE_SURVEY_OUTBOUND_PORT,
} from '../out-port/survey-delete.op';

@Injectable()
export class SurveyDeleteService implements DeleteSurveyInPort {
  constructor() {}

  execute(
    params: SurveyDeleteInPortInputDto,
  ): Promise<SurveyDeleteInPortOutputDto> {
    return null;
  }
}
