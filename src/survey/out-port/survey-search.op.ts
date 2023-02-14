export type SurveySearchOutPortInputDto = {
  keyword: string;
  page: number;
  size: number;
  sort: 'ASC' | 'DESC';
};

export type SurveySearchOutPortOutputDto = Array<{
  id: number;
  name: string;
  description: string;
}>;

export const SEARCH_SURVEY_OUTBOUND_PORT =
  'SEARCH_SURVEY_OUTBOUND_PORT' as const;

export interface SearchSurveyOutPort {
  execute(
    params: SurveySearchOutPortInputDto,
  ): Promise<SurveySearchOutPortOutputDto>;
}
