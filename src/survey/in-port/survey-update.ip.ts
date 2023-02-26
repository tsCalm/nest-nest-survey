import { SurveyUpdateInPut, SurveyUpdateOutPut } from '../types';

export type SurveyUpdateInPortInputDto = SurveyUpdateInPut;
export type SurveyUpdateInPortOutputDto = SurveyUpdateOutPut;

// provider token
export const UPDATE_SURVEY_INBOUND_PORT = 'UPDATE_SURVEY_INBOUND_PORT' as const;

export interface UpdateSurveyInPort {
  execute(
    params: SurveyUpdateInPortInputDto,
  ): Promise<SurveyUpdateInPortOutputDto>;
}
