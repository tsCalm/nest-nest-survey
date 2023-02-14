export type SurveyUpdateOutPortInputDto = {
  name?: string;
  description?: string;
};

export type SurveyUpdateOutPortOutputDto = {
  id: number;
  name: string;
  description: string;
};

export const UPDATE_SURVEY_OUTBOUND_PORT =
  'UPDATE_SURVEY_OUTBOUND_PORT' as const;

export interface UpdateSurveyOutPort {
  execute(
    params: SurveyUpdateOutPortInputDto,
  ): Promise<SurveyUpdateOutPortOutputDto>;
}
