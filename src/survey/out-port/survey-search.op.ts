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

export interface SearchSurveyOutPort {
  execute(
    params: SurveySearchOutPortInputDto,
  ): Promise<SurveySearchOutPortOutputDto>;
}
