import { SurveyFindAllInPut, SurveyFindAllOutPut } from '../types';

export type SurveyFindAllOutPortInputDto = SurveyFindAllInPut;
export type SurveyFindAllOutPortOutputDto = SurveyFindAllOutPut;

export const FINDALL_SURVEY_OUTBOUND_PORT =
  'FINDALL_SURVEY_OUTBOUND_PORT' as const;

export interface FindAllSurveyOutPort {
  execute(
    params: SurveyFindAllOutPortInputDto,
  ): Promise<SurveyFindAllOutPortOutputDto>;
}
