export type SurveyFindAllOutPortInputDto = {
  page: number;
  size: number;
  sort: 'ASC' | 'DESC';
};

export type SurveyFindAllOutPortOutputDto = Array<{
  id: number;
  name: string;
  description: string;
}>;

export interface FindAllSurveyOutPort {
  execute(
    params: SurveyFindAllOutPortInputDto,
  ): Promise<SurveyFindAllOutPortOutputDto>;
}
