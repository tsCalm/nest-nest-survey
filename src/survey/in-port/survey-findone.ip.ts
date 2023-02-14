export type SurveyFindOneInPortInputDto = {
  name: string;
  description: string;
};

export type SurveyFindOneInPortOutputDto = {
  id: number;
  name: string;
  description: string;
};

export const FINDONE_SURVEY_INBOUND_PORT =
  'FINDONE_SURVEY_INBOUND_PORT' as const;

export interface FindOneSurveyInPort {
  execute(
    params: SurveyFindOneInPortInputDto,
  ): Promise<SurveyFindOneInPortOutputDto>;
}
