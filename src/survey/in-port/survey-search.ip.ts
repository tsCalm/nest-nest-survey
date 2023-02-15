export type SurveySearchInPortInputDto = {
  keyword: string;
  page: number;
  size: number;
  sort: 'ASC' | 'DESC';
};

export type SurveySearchInPortOutputDto = Array<{
  id: number;
  name: string;
  description: string;
}>;

// provider token
export const SEARCH_SURVEY_INBOUND_PORT = 'SEARCH_SURVEY_INBOUND_PORT' as const;

export interface SearchSurveyInPort {
  execute(
    params: SurveySearchInPortInputDto,
  ): Promise<SurveySearchInPortOutputDto>;
}
