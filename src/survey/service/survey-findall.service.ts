import { Injectable } from '@nestjs/common';
import {
  FindAllSurveyOutPort,
  SurveyFindAllOutPortInputDto,
  SurveyFindAllOutPortOutputDto,
} from '../out-port/survey-findall.op';

@Injectable()
export class SurveyFindAllService implements FindAllSurveyOutPort {
  execute(
    params: SurveyFindAllOutPortInputDto,
  ): Promise<SurveyFindAllOutPortOutputDto> {
    return null;
  }
}
