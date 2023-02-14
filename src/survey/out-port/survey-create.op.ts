export type SurveyCreateOutPortInputDto = {
  name: string;
  description: string;
};

export type SurveyCreateOutPortOutputDto = {
  id: number;
  name: string;
  description: string;
};

export const CREATE_SURVEY_OUTBOUND_PORT =
  'CREATE_SURVEY_OUTBOUND_PORT' as const;

export interface CreateSurveyOutPort {
  execute(
    params: SurveyCreateOutPortInputDto,
  ): Promise<SurveyCreateOutPortOutputDto>;
}
