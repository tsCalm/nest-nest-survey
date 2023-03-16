import { SurveyFindAllInPut, SurveyFindAllOutPut } from '../types';

export type SurveyFindAllInPortInputDto = SurveyFindAllInPut;

export type SurveyFindAllInPortOutputDto = SurveyFindAllOutPut;

// provider token
export const FINDALL_SURVEY_INBOUND_PORT =
  'FINDALL_SURVEY_INBOUND_PORT' as const;

export interface FindAllSurveyInPort {
  execute(
    params: SurveyFindAllInPortInputDto,
  ): Promise<SurveyFindAllInPortOutputDto>;
}
