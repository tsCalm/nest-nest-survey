import { SurveyFindOneInPut, SurveyFindOneOutPut } from '../types';

export type SurveyFindOneOutPortInputDto = SurveyFindOneInPut;
export type SurveyFindOneOutPortOutputDto = SurveyFindOneOutPut;

export const FINDONE_SURVEY_OUTBOUND_PORT =
  'FINDONE_SURVEY_OUTBOUND_PORT' as const;

export interface FindOneSurveyOutPort {
  execute(
    params: SurveyFindOneOutPortInputDto,
  ): Promise<SurveyFindOneOutPortOutputDto>;
}
