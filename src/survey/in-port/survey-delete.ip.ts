export type SurveyDeleteInPortInputDto = {
  name: string;
  description: string;
};

export type SurveyDeleteInPortOutputDto = {
  id: number;
  name: string;
  description: string;
};

export const DELETE_SURVEY_INBOUND_PORT = 'DELETE_SURVEY_INBOUND_PORT' as const;

export interface DeleteSurveyInPort {
  execute(
    params: SurveyDeleteInPortInputDto,
  ): Promise<SurveyDeleteInPortOutputDto>;
}
