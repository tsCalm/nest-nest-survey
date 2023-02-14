export type SurveyFindOneOutPortInputDto = number;

export type SurveyFindOneOutPortOutputDto = {
  id: number;
  name: string;
  description: string;
};

export const FINDONE_SURVEY_OUTBOUND_PORT =
  'FINDONE_SURVEY_OUTBOUND_PORT' as const;

export interface FindOneSurveyOutPort {
  execute(
    params: SurveyFindOneOutPortInputDto,
  ): Promise<SurveyFindOneOutPortOutputDto>;
}
