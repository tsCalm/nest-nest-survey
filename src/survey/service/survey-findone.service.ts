import { Injectable } from '@nestjs/common';
import {
  FindOneSurveyOutPort,
  SurveyFindOneOutPortOutputDto,
} from '../out-port/survey-findone.op';

@Injectable()
export class SurveyFindOneService implements FindOneSurveyOutPort {
  execute(params: number): Promise<SurveyFindOneOutPortOutputDto> {
    return null;
  }
}
