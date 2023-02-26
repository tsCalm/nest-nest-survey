import { SurveySearchInPut, SurveySearchOutPut } from '../types';

export type SurveySearchOutPortInputDto = SurveySearchInPut;
export type SurveySearchOutPortOutputDto = SurveySearchOutPut;

export const SEARCH_SURVEY_OUTBOUND_PORT =
  'SEARCH_SURVEY_OUTBOUND_PORT' as const;

export interface SearchSurveyOutPort {
  execute(
    params: SurveySearchOutPortInputDto,
  ): Promise<SurveySearchOutPortOutputDto>;
}
