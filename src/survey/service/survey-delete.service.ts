import { Injectable } from '@nestjs/common';
import { DeleteSurveyOutPort } from '../out-port/survey-delete.op';

@Injectable()
export class SurveyDeleteService implements DeleteSurveyOutPort {
  execute(params: number): Promise<number> {
    return null;
  }
}
