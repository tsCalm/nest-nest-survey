import { Injectable } from '@nestjs/common';
import {
  SearchSurveyOutPort,
  SurveySearchOutPortInputDto,
  SurveySearchOutPortOutputDto,
} from '../out-port/survey-search.op';

@Injectable()
export class SurveySearchService implements SearchSurveyOutPort {
  execute(
    params: SurveySearchOutPortInputDto,
  ): Promise<SurveySearchOutPortOutputDto> {
    return null;
  }
}
