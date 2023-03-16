import { SurveyDelteInPut, SurveyDelteOutPut } from '../types';

export type SurveyDeleteInPortInputDto = SurveyDelteInPut;
export type SurveyDeleteInPortOutputDto = SurveyDelteOutPut;

// provider token
export const DELETE_SURVEY_INBOUND_PORT = 'DELETE_SURVEY_INBOUND_PORT' as const;

export interface DeleteSurveyInPort {
  execute(
    params: SurveyDeleteInPortInputDto,
  ): Promise<SurveyDeleteInPortOutputDto>;
}
