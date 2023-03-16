import { SurveyUpdateInPut, SurveyUpdateOutPut } from '../types';

export type SurveyUpdateOutPortInputDto = SurveyUpdateInPut;
export type SurveyUpdateOutPortOutputDto = SurveyUpdateOutPut;

export const UPDATE_SURVEY_OUTBOUND_PORT =
  'UPDATE_SURVEY_OUTBOUND_PORT' as const;

export interface UpdateSurveyOutPort {
  execute(
    params: SurveyUpdateOutPortInputDto,
  ): Promise<SurveyUpdateOutPortOutputDto>;
}
