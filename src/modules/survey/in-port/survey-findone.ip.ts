import { SurveyFindOneInPut, SurveyFindOneOutPut } from '../types';

export type SurveyFindOneInPortInputDto = SurveyFindOneInPut;

export type SurveyFindOneInPortOutputDto = SurveyFindOneOutPut;

// provider token
export const FINDONE_SURVEY_INBOUND_PORT =
  'FINDONE_SURVEY_INBOUND_PORT' as const;

export interface FindOneSurveyInPort {
  execute(
    params: SurveyFindOneInPortInputDto,
  ): Promise<SurveyFindOneInPortOutputDto>;
}
