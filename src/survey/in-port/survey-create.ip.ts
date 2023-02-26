import { SurveyCreateInPut, SurveyCreateOutPut } from '../types';

export type SurveyCreateInPortInputDto = SurveyCreateInPut;
export type SurveyCreateInPortOutputDto = SurveyCreateOutPut;

// provider token
export const CREATE_SURVEY_INBOUND_PORT = 'CREATE_SURVEY_INBOUND_PORT' as const;

export interface CreateSurveyInPort {
  execute(
    params: SurveyCreateInPortInputDto,
  ): Promise<SurveyCreateInPortOutputDto>;
}
