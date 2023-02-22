export type RespondentSearchOutPortInputDto = {
  keyword: string;
  page: number;
  size: number;
  sort: 'ASC' | 'DESC';
};

export type RespondentSearchOutPortOutputDto = Array<{
  id: number;
  name: string;
  email: string;
}>;

export const SEARCH_RESPONDENT_OUTBOUND_PORT =
  'SEARCH_RESPONDENT_OUTBOUND_PORT' as const;

export interface SearchRespondentOutPort {
  execute(
    params: RespondentSearchOutPortInputDto,
  ): Promise<RespondentSearchOutPortOutputDto>;
}
