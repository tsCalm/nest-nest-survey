export type SurveyDeleteOutPortInputDto = number;

export type SurveyDeleteOutPortOutputDto = number;

export const DELETE_SURVEY_OUTBOUND_PORT =
  'DELETE_SURVEY_OUTBOUND_PORT' as const;

export interface DeleteSurveyOutPort {
  execute(
    params: SurveyDeleteOutPortInputDto,
  ): Promise<SurveyDeleteOutPortOutputDto>;
}
