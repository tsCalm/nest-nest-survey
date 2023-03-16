import { Inject, Injectable } from '@nestjs/common';
import {
  SearchSurveyInPort,
  SurveySearchInPortInputDto,
  SurveySearchInPortOutputDto,
} from '../in-port/survey-search.ip';
import {
  SearchSurveyOutPort,
  SEARCH_SURVEY_OUTBOUND_PORT,
} from '../out-port/survey-search.op';

@Injectable()
export class SurveySearchService implements SearchSurveyInPort {
  constructor(
    @Inject(SEARCH_SURVEY_OUTBOUND_PORT)
    private readonly _searchSurveyOutPort: SearchSurveyOutPort,
  ) {}

  execute(
    params: SurveySearchInPortInputDto,
  ): Promise<SurveySearchInPortOutputDto> {
    return this._searchSurveyOutPort.execute(params);
  }
}
