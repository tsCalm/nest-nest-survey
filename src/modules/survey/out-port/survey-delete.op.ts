import { SurveyDelteInPut, SurveyDelteOutPut } from '../types';

export type SurveyDeleteOutPortInputDto = SurveyDelteInPut;
export type SurveyDeleteOutPortOutputDto = SurveyDelteOutPut;

export const DELETE_SURVEY_OUTBOUND_PORT =
  'DELETE_SURVEY_OUTBOUND_PORT' as const;

export interface DeleteSurveyOutPort {
  execute(
    params: SurveyDeleteOutPortInputDto,
  ): Promise<SurveyDeleteOutPortOutputDto>;
}
