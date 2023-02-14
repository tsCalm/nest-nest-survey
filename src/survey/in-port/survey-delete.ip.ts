export type SurveyDeleteInPortInputDto = number;

export type SurveyDeleteInPortOutputDto = number;

// provider token
export const DELETE_SURVEY_INBOUND_PORT = 'DELETE_SURVEY_INBOUND_PORT' as const;

export interface DeleteSurveyInPort {
  execute(
    params: SurveyDeleteInPortInputDto,
  ): Promise<SurveyDeleteInPortOutputDto>;
}
