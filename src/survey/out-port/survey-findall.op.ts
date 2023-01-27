export type SurveyFindAllOutPortInputDto = {
  page: number;
  size: number;
  sort: 'ASC' | 'DESC';
};

export type SurveyFindAllOutPortOutputDto = Array<{
  id: number;
}>;

export interface FindAllSurveyOutPort {
  execute(
    params: SurveyFindAllOutPortInputDto,
  ): Promise<SurveyFindAllOutPortOutputDto>;
}
