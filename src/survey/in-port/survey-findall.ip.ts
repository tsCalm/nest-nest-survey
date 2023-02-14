export type SurveyFindAllInPortInputDto = {
  name: string;
  description: string;
};

export type SurveyFindAllInPortOutputDto = {
  id: number;
  name: string;
  description: string;
};

export const FINDALL_SURVEY_INBOUND_PORT =
  'FINDALL_SURVEY_INBOUND_PORT' as const;

export interface FindAllSurveyInPort {
  execute(
    params: SurveyFindAllInPortInputDto,
  ): Promise<SurveyFindAllInPortOutputDto>;
}
