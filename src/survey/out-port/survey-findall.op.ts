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

export const FINDALL_SURVEY_OUTBOUND_PORT =
  'FINDALL_SURVEY_OUTBOUND_PORT' as const;

export interface FindAllSurveyOutPort {
  execute(
    params: SurveyFindAllOutPortInputDto,
  ): Promise<SurveyFindAllOutPortOutputDto>;
}
