import { SurveyCreateInPut, SurveyCreateOutPut } from '../types';

export type SurveyCreateOutPortInputDto = SurveyCreateInPut;
export type SurveyCreateOutPortOutputDto = SurveyCreateOutPut;

export const CREATE_SURVEY_OUTBOUND_PORT =
  'CREATE_SURVEY_OUTBOUND_PORT' as const;

export interface CreateSurveyOutPort {
  execute(
    params: SurveyCreateOutPortInputDto,
  ): Promise<SurveyCreateOutPortOutputDto>;
}
