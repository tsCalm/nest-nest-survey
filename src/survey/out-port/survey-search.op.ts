export type SurveySearchOutPortInputDto = {
  keyword: string;
};

export type SurveySearchOutPortOutputDto = Array<{
  id: number;
}>;

export interface SearchSurveyOutPort {
  execute(
    params: SurveySearchOutPortInputDto,
  ): Promise<SurveySearchOutPortOutputDto>;
}
