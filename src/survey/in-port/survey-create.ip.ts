export type SurveyCreateInPortInputDto = {
  name: string;
  description: string;
};

export type SurveyCreateInPortOutputDto = {
  id: number;
  name: string;
  description: string;
};

export const CREATE_SURVEY_INBOUND_PORT = 'CREATE_SURVEY_INBOUND_PORT' as const;

export interface CreateSurveyInPort {
  execute(
    params: SurveyCreateInPortInputDto,
  ): Promise<SurveyCreateInPortOutputDto>;
}
