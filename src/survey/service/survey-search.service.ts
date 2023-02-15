import { Injectable } from '@nestjs/common';
import {
  SearchSurveyInPort,
  SurveySearchInPortInputDto,
  SurveySearchInPortOutputDto,
} from '../in-port/survey-search.ip';

@Injectable()
export class SurveySearchService implements SearchSurveyInPort {
  execute(
    params: SurveySearchInPortInputDto,
  ): Promise<SurveySearchInPortOutputDto> {
    return null;
  }
}
