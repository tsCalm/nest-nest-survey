export type SurveySearchInPortInputDto = {
  name: string;
  description: string;
};

export type SurveySearchInPortOutputDto = {
  id: number;
  name: string;
  description: string;
};

export const SEARCH_SURVEY_INBOUND_PORT = 'SEARCH_SURVEY_INBOUND_PORT' as const;

export interface SearchSurveyInPort {
  execute(
    params: SurveySearchInPortInputDto,
  ): Promise<SurveySearchInPortOutputDto>;
}
