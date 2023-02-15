import { Injectable } from '@nestjs/common';
import {
  DeleteSurveyInPort,
  SurveyDeleteInPortInputDto,
  SurveyDeleteInPortOutputDto,
} from '../in-port/survey-delete.ip';

@Injectable()
export class SurveyDeleteService implements DeleteSurveyInPort {
  execute(
    params: SurveyDeleteInPortInputDto,
  ): Promise<SurveyDeleteInPortOutputDto> {
    return null;
  }
}
